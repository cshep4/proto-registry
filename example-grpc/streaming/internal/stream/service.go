package stream

import (
	"fmt"
	"io"
	"time"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/cshep4/proto-repository/example-grpc/streaming/proto"
)

type Service struct {
	*proto.UnimplementedStreamingServiceServer
}

func (s Service) ServerStreaming(req *proto.ServerStreamingRequest, stream proto.StreamingService_ServerStreamingServer) error {
	if req.GetMessage() == "" {
		return status.Error(codes.InvalidArgument, "name cannot be empty")
	}

	for i := 0; i < 5; i++ {
		res := &proto.ServerStreamingResponse{
			Message: fmt.Sprintf("%d) %s", i, req.GetMessage()),
		}
		if err := stream.Send(res); err != nil {
			return err
		}
		time.Sleep(time.Second)
	}

	return nil
}

func (s Service) ClientStreaming(stream proto.StreamingService_ClientStreamingServer) error {
	var receivedMessages []string
	for {
		req, err := stream.Recv()
		if err == io.EOF {
			return stream.SendAndClose(&proto.ClientStreamingResponse{ReceivedMessages: receivedMessages})
		}
		if err != nil {
			return err
		}

		receivedMessages = append(receivedMessages, req.Name)
	}
}

func (s Service) BiDirectionalStreaming(stream proto.StreamingService_BiDirectionalStreamingServer) error {
	for {
		req, err := stream.Recv()
		if err == io.EOF {
			return nil
		}
		if err != nil {
			return err
		}

		res := &proto.BiDirectionalStreamingResponse{
			Message: fmt.Sprintf("Hello %s!", req.GetName()),
		}
		if err := stream.Send(res); err != nil {
			return err
		}
	}
}
