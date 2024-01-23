# StreamingService

## Overview

This project contains Go-based example client/server applications using gRPC streaming. It demonstrates examples of
efficient file transfer using gRPC's streaming capabilities.

### Features

- Stream-based file download using server-streaming & client-streaming.
- An echo server using bi-directional streaming.

## Protobuf

The protobuf service definition can be found here: [streaming.proto](proto%2Fstreaming.proto).

To regenerate the client/server stubs in Go, use the following command:

```
$ protoc --go_out=. --go_opt=paths=source_relative \
    --go-grpc_out=. --go-grpc_opt=paths=source_relative \
    proto/streaming.proto
```

## Server

The [cmd/server](cmd%2Fserver) directory contains the example server for the StreamingService.

To run the server, use the following command:

```
$ go run cmd/server/main.go
```

## Client

The [cmd/client](cmd%2Fclient) directory contains client examples of each RPC defined on the StreamingService.

To run the client, use the following command:

```
$ go run cmd/client/main.go
```

## Download Client

The [cmd/download-client](cmd%2Fdownload-client) directory contains an example client application for downloading a file
through the DownloadFile server-streaming RPC.

To run the download client, use the following command:

```
$ go run cmd/download-client/main.go
```