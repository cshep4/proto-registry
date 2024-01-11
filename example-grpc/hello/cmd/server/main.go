package main

import (
	"context"
	"log"
	"net"

	"golang.org/x/sync/errgroup"
	"google.golang.org/grpc"

	"github.com/cshep4/proto-repository/example-grpc/hello/internal/hello"
	"github.com/cshep4/proto-repository/example-grpc/hello/proto"
)

func main() {
	ctx := context.Background()

	gs := grpc.NewServer()

	helloService := &hello.Service{}

	proto.RegisterHelloServiceServer(gs, helloService)

	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatal(err)
	}

	eg, ctx := errgroup.WithContext(ctx)

	eg.Go(func() error {
		log.Println("starting grpc server at :50051")
		return gs.Serve(lis)
	})

	if err := eg.Wait(); err != nil {
		log.Fatal(err)
	}
}
