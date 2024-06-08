package main

import (
	"log"
	"net"

	"google.golang.org/grpc"

	"github.com/cshep4/proto-registry/example-grpc/hello/internal/hello"
	"github.com/cshep4/proto-registry/example-grpc/hello/proto"
)

func main() {
	grpcServer := grpc.NewServer()

	helloService := &hello.Service{}

	proto.RegisterHelloServiceServer(grpcServer, helloService)

	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatal(err)
	}
	defer lis.Close()

	log.Printf("starting grpc server on address: %s", ":50051")

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatal(err)
	}
}
