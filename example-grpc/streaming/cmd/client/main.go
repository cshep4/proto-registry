package main

import (
	"context"
	"fmt"
	"io"
	"log"
	"time"

	"golang.org/x/sync/errgroup"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	"github.com/cshep4/proto-repository/example-grpc/streaming/proto"
)

func main() {
	ctx := context.Background()

	conn, err := grpc.Dial("localhost:50051", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	client := proto.NewStreamingServiceClient(conn)

	log.Println("client streaming")

	if err := clientStreaming(ctx, client); err != nil {
		log.Fatal(err)
	}

	log.Println("server streaming")

	if err := serverStreaming(ctx, client); err != nil {
		log.Fatal(err)
	}

	log.Println("bidirectional streaming")

	if err := biDirectionalStreaming(ctx, client); err != nil {
		log.Fatal(err)
	}
}

func clientStreaming(ctx context.Context, client proto.StreamingServiceClient) error {
	stream, err := client.ClientStreaming(ctx)
	if err != nil {
		return err
	}

	for i := 0; i < 5; i++ {
		req := &proto.ClientStreamingRequest{Name: fmt.Sprintf("name %d", i)}
		if err := stream.Send(req); err != nil {
			return err
		}
	}

	res, err := stream.CloseAndRecv()
	if err != nil {
		return err
	}

	log.Printf("response received: %s", res.ReceivedMessages)

	return nil
}

func serverStreaming(ctx context.Context, client proto.StreamingServiceClient) error {
	stream, err := client.ServerStreaming(ctx, &proto.ServerStreamingRequest{Message: "hello world!"})
	if err != nil {
		return err
	}

	for {
		res, err := stream.Recv()
		if err == io.EOF {
			break
		}
		if err != nil {
			return err
		}
		log.Printf("response received: %s", res.Message)
	}

	return nil
}

func biDirectionalStreaming(ctx context.Context, client proto.StreamingServiceClient) error {
	stream, err := client.BiDirectionalStreaming(ctx)
	if err != nil {
		return err
	}

	eg, ctx := errgroup.WithContext(ctx)

	eg.Go(func() error {
		for {
			res, err := stream.Recv()
			if err == io.EOF {
				break // read done.
			}
			if err != nil {
				return err
			}
			log.Printf("response received: %s", res.Message)
		}
		return nil
	})

	for i := 0; i < 5; i++ {
		req := &proto.BiDirectionalStreamingRequest{Name: fmt.Sprintf("name %d", i)}
		if err := stream.Send(req); err != nil {
			return err
		}
		time.Sleep(time.Second)
	}
	if err := stream.CloseSend(); err != nil {
		return err
	}

	if err := eg.Wait(); err != nil {
		return err
	}

	return nil
}
