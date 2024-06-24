# Proto-Registry

An example repository to show how to effectively store & manage protocol buffer definitions for gRPC services.

- [Project structure](#project-structure)
- [Creating New Protos](#creating-new-protos)
- [Formatting, Generating, Linting and Breaking Change Detection](#formatting-generating-linting-and-breaking-change-detection)
    - [Formatting](#formatting)
    - [Linting](#linting)
    - [Breaking Change Detection](#breaking-change-detection)
    - [Generating](#generating)
- [Importing Generated Protobuf (in Go)](#importing-generated-protobuf-in-go)
- [gRPC Examples](#grpc-examples)

## Project structure

- [example-grpc/](example-grpc) contains example gRPC clients & services.
- [gen/](gen) contains generated code from protobuf, each language is kept in a separate directory
- [protobuf/](protobuf) contains all the proto files

## Creating New Protos
To create new proto files, create a new directory for the service inside the `protobuf` folder and
create the proto file there.
```
mkdir -p protobuf/domain/service-name/v1
touch protobuf/domain/service-name/v1/service_name.proto
```

## Formatting, Generating, Linting and Breaking Change Detection
Running `make` will format, lint proto files, check for any breaking changes and generate the code in each supported language.

Alternatively, the individual commands can be run if more control is needed.

### Formatting
To format proto files, run
```
make fmt
```

### Linting
To lint proto files, run
```
make lint
```

### Breaking change detection
Before making any changes to the repository, make sure to run
```
make break-check
```

This will fetch the latest changes from the remote repository and will check if breaking changes
have been made against the `main` branch.

### Generating
To generate code from the proto files, run
```
make proto-gen
```

## Importing Generated Protobuf (in Go)
To import the generated protobuf code into your Go project, run
```
go get github.com/cshep4/proto-registry
```

Example usage:

```go
package main

import (
	"context"
	"log"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	hellov1 "github.com/cshep4/proto-registry/gen/go/hello/v1"
)

func main() {
	ctx := context.Background()

	conn, err := grpc.Dial("localhost:50051", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	client := hellov1.NewHelloServiceClient(conn)

	res, err := client.SayHello(ctx, &hellov1.SayHelloRequest{Name: "Chris"})
	if err != nil {
		log.Fatal(err)
	}

	log.Printf("Response received: %s", res.Message)
}
```

## gRPC Examples

The [example-grpc/](example-grpc) directory contains example gRPC clients & services.

- [example-grpc/hello](example-grpc/hello) contains a simple example of a hello world gRPC service and client.
- [example-grpc/streaming](example-grpc/streaming) contains a gRPC server and client with example RPC using client-streaming, server-streaming and bi-directional streaming.
