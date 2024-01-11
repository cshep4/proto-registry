package stream

import (
	"fmt"
	"github.com/cshep4/proto-repository/example-grpc/streaming/proto"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"io"
	"time"
)

type Service struct {
	*proto.UnimplementedStreamingServiceServer
}

func (s Service) ServerStream(req *proto.ServerStreamRequest, stream proto.StreamingService_ServerStreamServer) error {
	if req.GetMessage() == "" {
		return status.Error(codes.InvalidArgument, "name cannot be empty")
	}

	for i := 0; i < 5; i++ {
		res := &proto.ServerStreamResponse{
			Message: fmt.Sprintf("%d) %s", i, req.GetMessage()),
		}
		if err := stream.Send(res); err != nil {
			return err
		}
		time.Sleep(time.Second)
	}

	return nil
}

func (s Service) ClientStream(stream proto.StreamingService_ClientStreamServer) error {
	var receivedMessages []string
	for {
		req, err := stream.Recv()
		if err == io.EOF {
			return stream.SendAndClose(&proto.ClientStreamResponse{ReceivedMessages: receivedMessages})
		}
		if err != nil {
			return err
		}

		receivedMessages = append(receivedMessages, req.Name)
	}
}

func (s Service) BiDirectionalStream(stream proto.StreamingService_BiDirectionalStreamServer) error {
	for {
		req, err := stream.Recv()
		if err == io.EOF {
			return nil
		}
		if err != nil {
			return err
		}

		res := &proto.BiDirectionalStreamResponse{
			Message: fmt.Sprintf("Hello %s!", req.GetName()),
		}
		if err := stream.Send(res); err != nil {
			return err
		}
	}
}
