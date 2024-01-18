package stream

import (
	"fmt"
	"io"
	"os"

	"github.com/google/uuid"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/cshep4/proto-registry/example-grpc/streaming/proto"
)

type Service struct {
	*proto.UnimplementedStreamingServiceServer
}

func (s Service) DownloadFile(req *proto.DownloadFileRequest, stream proto.StreamingService_DownloadFileServer) error {
	if req.GetName() == "" {
		return status.Error(codes.InvalidArgument, "filename cannot be empty")
	}

	// open file
	file, err := os.Open(req.Name)
	if err != nil {
		if os.IsNotExist(err) {
			return status.Error(codes.NotFound, "file not found")
		}
		return err
	}
	defer file.Close()

	bufferSize := 5 * 1024 // send in 5KiB chunks
	buff := make([]byte, bufferSize)
	for {
		// read bytes
		bytesRead, err := file.Read(buff)
		if err != nil {
			if err == io.EOF {
				return nil // end of file, close stream
			}
			return err
		}

		// stream bytes to client
		err = stream.Send(&proto.DownloadFileResponse{Content: buff[:bytesRead]})
		if err != nil {
			return err
		}
	}
}

func (s Service) UploadFile(stream proto.StreamingService_UploadFileServer) error {
	// generate file name
	fileName := fmt.Sprintf("%s.png", uuid.New().String())

	// create file
	fo, err := os.Create(fileName)
	if err != nil {
		return err
	}
	defer fo.Close()

	for {
		// receive chunk
		res, err := stream.Recv()
		if err != nil {
			if err == io.EOF {
				// close stream and send response
				return stream.SendAndClose(&proto.UploadFileResponse{Name: fileName})
			}
			return err
		}

		// write chunk to file
		if _, err := fo.Write(res.Content); err != nil {
			return fmt.Errorf("failed to write to file %w", err)
		}
	}
}

func (s Service) Echo(stream proto.StreamingService_EchoServer) error {
	for {
		// receive client message
		req, err := stream.Recv()
		if err != nil {
			if err == io.EOF {
				return nil // client stream done
			}
			return err
		}

		// build response
		res := &proto.EchoResponse{
			Message: fmt.Sprintf("Received message: %s", req.GetMessage()),
		}

		// send response to client
		if err := stream.Send(res); err != nil {
			return err
		}
	}
}
