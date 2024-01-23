package main

import (
	"log"
	"net"

	"google.golang.org/grpc"

	"github.com/cshep4/proto-registry/example-grpc/streaming/internal/stream"
	"github.com/cshep4/proto-registry/example-grpc/streaming/proto"
)

func main() {
	grpcServer := grpc.NewServer()

	streamingService := &stream.Service{}

	proto.RegisterStreamingServiceServer(grpcServer, streamingService)

	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatal(err)
	}

	log.Printf("starting grpc server on address: %s", ":50051")

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatal(err)
	}
}
