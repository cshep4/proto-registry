# HelloService

## Overview

This project demonstrates a simple Go-based gRPC "Hello World" service. It provides a basic example of how gRPC is used
for client-server communication.

### Features

- Simple gRPC implementation of a "Hello World" unary RPC.
- Demonstration of basic client-server architecture using gRPC.

## Protobuf

Find the protobuf definition in [hello.proto](proto%2Fhello.proto).

To regenerate the client/server stubs in Go, use the following command:

```
$ protoc --go_out=. --go_opt=paths=source_relative \
    --go-grpc_out=. --go-grpc_opt=paths=source_relative \
    proto/hello.proto
```

## Server

The [cmd/server](cmd%2Fserver) directory contains the example server for the StreamingService.

To run the server, use the following command:

```
$ go run cmd/server/main.go
```

## Client

The [cmd/client](cmd%2Fclient) directory contains client examples of each RPC defined on the StreamingService.

To run the client, you can use the following command:

```
$ go run cmd/client/main.go
```