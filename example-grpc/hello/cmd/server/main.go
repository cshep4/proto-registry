package main

import (
	"context"
	"log/slog"
	"net"
	"os"

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
		slog.Error("failed to listen", slog.String("error", err.Error()))
		os.Exit(1)
	}

	eg, ctx := errgroup.WithContext(ctx)

	eg.Go(func() error {
		slog.Info("starting grpc server", slog.String("address", ":50051"))
		return gs.Serve(lis)
	})

	if err := eg.Wait(); err != nil {
		slog.Error("error running server", slog.String("error", err.Error()))
		os.Exit(1)
	}
}
