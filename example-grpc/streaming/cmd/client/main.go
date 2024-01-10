package main

import (
	"context"
	"log/slog"
	"os"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	"github.com/cshep4/proto-repository/example-grpc/streaming/proto"
)

func main() {
	ctx := context.Background()

	conn, err := grpc.Dial("localhost:50051", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		slog.Error("failed to dial", slog.String("error", err.Error()))
		os.Exit(1)
	}
	defer conn.Close()

	client := proto.NewHelloServiceClient(conn)

	res, err := client.SayHello(ctx, &proto.SayHelloRequest{Name: "Chris"})
	if err != nil {
		slog.Error("failed to say hello", slog.String("error", err.Error()))
		os.Exit(1)
	}

	slog.Info(res.Message)
}
