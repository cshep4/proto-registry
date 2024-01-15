// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.4
// source: proto/streaming.proto

package proto

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// StreamingServiceClient is the client API for StreamingService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type StreamingServiceClient interface {
	DownloadFile(ctx context.Context, in *DownloadFileRequest, opts ...grpc.CallOption) (StreamingService_DownloadFileClient, error)
	UploadFile(ctx context.Context, opts ...grpc.CallOption) (StreamingService_UploadFileClient, error)
	Echo(ctx context.Context, opts ...grpc.CallOption) (StreamingService_EchoClient, error)
}

type streamingServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewStreamingServiceClient(cc grpc.ClientConnInterface) StreamingServiceClient {
	return &streamingServiceClient{cc}
}

func (c *streamingServiceClient) DownloadFile(ctx context.Context, in *DownloadFileRequest, opts ...grpc.CallOption) (StreamingService_DownloadFileClient, error) {
	stream, err := c.cc.NewStream(ctx, &StreamingService_ServiceDesc.Streams[0], "/streaming.StreamingService/DownloadFile", opts...)
	if err != nil {
		return nil, err
	}
	x := &streamingServiceDownloadFileClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type StreamingService_DownloadFileClient interface {
	Recv() (*DownloadFileResponse, error)
	grpc.ClientStream
}

type streamingServiceDownloadFileClient struct {
	grpc.ClientStream
}

func (x *streamingServiceDownloadFileClient) Recv() (*DownloadFileResponse, error) {
	m := new(DownloadFileResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *streamingServiceClient) UploadFile(ctx context.Context, opts ...grpc.CallOption) (StreamingService_UploadFileClient, error) {
	stream, err := c.cc.NewStream(ctx, &StreamingService_ServiceDesc.Streams[1], "/streaming.StreamingService/UploadFile", opts...)
	if err != nil {
		return nil, err
	}
	x := &streamingServiceUploadFileClient{stream}
	return x, nil
}

type StreamingService_UploadFileClient interface {
	Send(*UploadFileRequest) error
	CloseAndRecv() (*UploadFileResponse, error)
	grpc.ClientStream
}

type streamingServiceUploadFileClient struct {
	grpc.ClientStream
}

func (x *streamingServiceUploadFileClient) Send(m *UploadFileRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *streamingServiceUploadFileClient) CloseAndRecv() (*UploadFileResponse, error) {
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	m := new(UploadFileResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *streamingServiceClient) Echo(ctx context.Context, opts ...grpc.CallOption) (StreamingService_EchoClient, error) {
	stream, err := c.cc.NewStream(ctx, &StreamingService_ServiceDesc.Streams[2], "/streaming.StreamingService/Echo", opts...)
	if err != nil {
		return nil, err
	}
	x := &streamingServiceEchoClient{stream}
	return x, nil
}

type StreamingService_EchoClient interface {
	Send(*EchoRequest) error
	Recv() (*EchoResponse, error)
	grpc.ClientStream
}

type streamingServiceEchoClient struct {
	grpc.ClientStream
}

func (x *streamingServiceEchoClient) Send(m *EchoRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *streamingServiceEchoClient) Recv() (*EchoResponse, error) {
	m := new(EchoResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// StreamingServiceServer is the server API for StreamingService service.
// All implementations must embed UnimplementedStreamingServiceServer
// for forward compatibility
type StreamingServiceServer interface {
	DownloadFile(*DownloadFileRequest, StreamingService_DownloadFileServer) error
	UploadFile(StreamingService_UploadFileServer) error
	Echo(StreamingService_EchoServer) error
	mustEmbedUnimplementedStreamingServiceServer()
}

// UnimplementedStreamingServiceServer must be embedded to have forward compatible implementations.
type UnimplementedStreamingServiceServer struct {
}

func (UnimplementedStreamingServiceServer) DownloadFile(*DownloadFileRequest, StreamingService_DownloadFileServer) error {
	return status.Errorf(codes.Unimplemented, "method DownloadFile not implemented")
}
func (UnimplementedStreamingServiceServer) UploadFile(StreamingService_UploadFileServer) error {
	return status.Errorf(codes.Unimplemented, "method UploadFile not implemented")
}
func (UnimplementedStreamingServiceServer) Echo(StreamingService_EchoServer) error {
	return status.Errorf(codes.Unimplemented, "method Echo not implemented")
}
func (UnimplementedStreamingServiceServer) mustEmbedUnimplementedStreamingServiceServer() {}

// UnsafeStreamingServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to StreamingServiceServer will
// result in compilation errors.
type UnsafeStreamingServiceServer interface {
	mustEmbedUnimplementedStreamingServiceServer()
}

func RegisterStreamingServiceServer(s grpc.ServiceRegistrar, srv StreamingServiceServer) {
	s.RegisterService(&StreamingService_ServiceDesc, srv)
}

func _StreamingService_DownloadFile_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(DownloadFileRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(StreamingServiceServer).DownloadFile(m, &streamingServiceDownloadFileServer{stream})
}

type StreamingService_DownloadFileServer interface {
	Send(*DownloadFileResponse) error
	grpc.ServerStream
}

type streamingServiceDownloadFileServer struct {
	grpc.ServerStream
}

func (x *streamingServiceDownloadFileServer) Send(m *DownloadFileResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _StreamingService_UploadFile_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(StreamingServiceServer).UploadFile(&streamingServiceUploadFileServer{stream})
}

type StreamingService_UploadFileServer interface {
	SendAndClose(*UploadFileResponse) error
	Recv() (*UploadFileRequest, error)
	grpc.ServerStream
}

type streamingServiceUploadFileServer struct {
	grpc.ServerStream
}

func (x *streamingServiceUploadFileServer) SendAndClose(m *UploadFileResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *streamingServiceUploadFileServer) Recv() (*UploadFileRequest, error) {
	m := new(UploadFileRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _StreamingService_Echo_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(StreamingServiceServer).Echo(&streamingServiceEchoServer{stream})
}

type StreamingService_EchoServer interface {
	Send(*EchoResponse) error
	Recv() (*EchoRequest, error)
	grpc.ServerStream
}

type streamingServiceEchoServer struct {
	grpc.ServerStream
}

func (x *streamingServiceEchoServer) Send(m *EchoResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *streamingServiceEchoServer) Recv() (*EchoRequest, error) {
	m := new(EchoRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// StreamingService_ServiceDesc is the grpc.ServiceDesc for StreamingService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var StreamingService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "streaming.StreamingService",
	HandlerType: (*StreamingServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "DownloadFile",
			Handler:       _StreamingService_DownloadFile_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "UploadFile",
			Handler:       _StreamingService_UploadFile_Handler,
			ClientStreams: true,
		},
		{
			StreamName:    "Echo",
			Handler:       _StreamingService_Echo_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "proto/streaming.proto",
}
