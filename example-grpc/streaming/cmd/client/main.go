package main

import (
	"context"
	"fmt"
	"io"
	"log"
	"os"
	"time"

	"golang.org/x/sync/errgroup"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	"github.com/cshep4/proto-registry/example-grpc/streaming/proto"
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

// serverStreaming is an example of a server streaming RPC.
// It takes a filename in the request and streams the file in chunks to the client.
func serverStreaming(ctx context.Context, client proto.StreamingServiceClient) error {
	// make request to server and initialise stream
	stream, err := client.DownloadFile(ctx, &proto.DownloadFileRequest{Name: "gopher.png"})
	if err != nil {
		return err
	}

	// create file
	fo, err := os.Create("./output.png")
	if err != nil {
		return err
	}
	defer fo.Close()

	for {
		// receive file chunk
		res, err := stream.Recv()
		if err != nil {
			if err == io.EOF {
				break // stream done
			}
			return err
		}

		// write chunk to file
		if _, err := fo.Write(res.Content); err != nil {
			return fmt.Errorf("failed to write to file %w", err)
		}
	}

	return nil
}

// clientStreaming is an example of a client streaming RPC.
// It streams a file in chunks to the server and receives a generated file name in the response.
func clientStreaming(ctx context.Context, client proto.StreamingServiceClient) error {
	// initialise stream
	stream, err := client.UploadFile(ctx)
	if err != nil {
		return err
	}

	// open file
	file, err := os.Open("gopher.png")
	if err != nil {
		return err
	}
	defer file.Close()

	bufferSize := 5 * 1024 // send in 5KiB chunks
	buff := make([]byte, bufferSize)
	for {
		// read file bytes
		bytesRead, err := file.Read(buff)
		if err != nil {
			if err == io.EOF {
				break // end of file
			}
			return err
		}

		// stream bytes to server
		if err := stream.Send(&proto.UploadFileRequest{Content: buff[:bytesRead]}); err != nil {
			return err
		}
	}

	// receive response from server
	res, err := stream.CloseAndRecv()
	if err != nil {
		return err
	}

	log.Printf("file name: %s", res.Name)

	return nil
}

// biDirectionalStreaming is an example of a bidirectional streaming RPC.
// It streams messages to the server, the server then responds by echoing the message back to the client.
func biDirectionalStreaming(ctx context.Context, client proto.StreamingServiceClient) error {
	// initialise stream
	stream, err := client.Echo(ctx)
	if err != nil {
		return err
	}

	eg, ctx := errgroup.WithContext(ctx)

	// receive server responses in separate go routine
	eg.Go(func() error {
		for {
			// receive message from server
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
		// send message to server
		req := &proto.EchoRequest{Message: fmt.Sprintf("Hello %d", i)}
		if err := stream.Send(req); err != nil {
			return err
		}
		time.Sleep(time.Second)
	}
	// close client stream
	if err := stream.CloseSend(); err != nil {
		return err
	}

	// wait for server response go routine to finish
	if err := eg.Wait(); err != nil {
		return err
	}

	return nil
}
