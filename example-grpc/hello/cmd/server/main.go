package main

import (
	"log"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	"github.com/cshep4/proto-registry/example-grpc/hello/internal/hello"
	"github.com/cshep4/proto-registry/example-grpc/hello/proto"
)

// gRPC Server Reflection is a service provided by gRPC that enables
// clients to explore the API of a server at runtime.
// This is useful in environments where service definitions
// might change dynamically, or when developing tools that need to interact
// with unknown gRPC services.

func main() {
	grpcServer := grpc.NewServer()

	helloService := &hello.Service{}

	proto.RegisterHelloServiceServer(grpcServer, helloService)
	reflection.Register(grpcServer)

	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatal(err)
	}

	log.Printf("starting grpc server on address: %s", ":50051")

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatal(err)
	}
}

//grpcurl -d '{"name": "Chris"}' \
// -import-path ./proto -proto hello.proto \
// -plaintext localhost:50051 \
// hello.HelloService/SayHello
