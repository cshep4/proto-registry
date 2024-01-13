package com.streaming.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.55.1)",
    comments = "Source: streaming/v1/streaming.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class StreamingServiceGrpc {

  private StreamingServiceGrpc() {}

  public static final String SERVICE_NAME = "streaming.v1.StreamingService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.streaming.v1.ServerStreamingRequest,
      com.streaming.v1.ServerStreamingResponse> getServerStreamingMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ServerStreaming",
      requestType = com.streaming.v1.ServerStreamingRequest.class,
      responseType = com.streaming.v1.ServerStreamingResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<com.streaming.v1.ServerStreamingRequest,
      com.streaming.v1.ServerStreamingResponse> getServerStreamingMethod() {
    io.grpc.MethodDescriptor<com.streaming.v1.ServerStreamingRequest, com.streaming.v1.ServerStreamingResponse> getServerStreamingMethod;
    if ((getServerStreamingMethod = StreamingServiceGrpc.getServerStreamingMethod) == null) {
      synchronized (StreamingServiceGrpc.class) {
        if ((getServerStreamingMethod = StreamingServiceGrpc.getServerStreamingMethod) == null) {
          StreamingServiceGrpc.getServerStreamingMethod = getServerStreamingMethod =
              io.grpc.MethodDescriptor.<com.streaming.v1.ServerStreamingRequest, com.streaming.v1.ServerStreamingResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ServerStreaming"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.streaming.v1.ServerStreamingRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.streaming.v1.ServerStreamingResponse.getDefaultInstance()))
              .setSchemaDescriptor(new StreamingServiceMethodDescriptorSupplier("ServerStreaming"))
              .build();
        }
      }
    }
    return getServerStreamingMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.streaming.v1.ClientStreamingRequest,
      com.streaming.v1.ClientStreamingResponse> getClientStreamingMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ClientStreaming",
      requestType = com.streaming.v1.ClientStreamingRequest.class,
      responseType = com.streaming.v1.ClientStreamingResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.CLIENT_STREAMING)
  public static io.grpc.MethodDescriptor<com.streaming.v1.ClientStreamingRequest,
      com.streaming.v1.ClientStreamingResponse> getClientStreamingMethod() {
    io.grpc.MethodDescriptor<com.streaming.v1.ClientStreamingRequest, com.streaming.v1.ClientStreamingResponse> getClientStreamingMethod;
    if ((getClientStreamingMethod = StreamingServiceGrpc.getClientStreamingMethod) == null) {
      synchronized (StreamingServiceGrpc.class) {
        if ((getClientStreamingMethod = StreamingServiceGrpc.getClientStreamingMethod) == null) {
          StreamingServiceGrpc.getClientStreamingMethod = getClientStreamingMethod =
              io.grpc.MethodDescriptor.<com.streaming.v1.ClientStreamingRequest, com.streaming.v1.ClientStreamingResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.CLIENT_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ClientStreaming"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.streaming.v1.ClientStreamingRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.streaming.v1.ClientStreamingResponse.getDefaultInstance()))
              .setSchemaDescriptor(new StreamingServiceMethodDescriptorSupplier("ClientStreaming"))
              .build();
        }
      }
    }
    return getClientStreamingMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.streaming.v1.BiDirectionalStreamingRequest,
      com.streaming.v1.BiDirectionalStreamingResponse> getBiDirectionalStreamingMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "BiDirectionalStreaming",
      requestType = com.streaming.v1.BiDirectionalStreamingRequest.class,
      responseType = com.streaming.v1.BiDirectionalStreamingResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
  public static io.grpc.MethodDescriptor<com.streaming.v1.BiDirectionalStreamingRequest,
      com.streaming.v1.BiDirectionalStreamingResponse> getBiDirectionalStreamingMethod() {
    io.grpc.MethodDescriptor<com.streaming.v1.BiDirectionalStreamingRequest, com.streaming.v1.BiDirectionalStreamingResponse> getBiDirectionalStreamingMethod;
    if ((getBiDirectionalStreamingMethod = StreamingServiceGrpc.getBiDirectionalStreamingMethod) == null) {
      synchronized (StreamingServiceGrpc.class) {
        if ((getBiDirectionalStreamingMethod = StreamingServiceGrpc.getBiDirectionalStreamingMethod) == null) {
          StreamingServiceGrpc.getBiDirectionalStreamingMethod = getBiDirectionalStreamingMethod =
              io.grpc.MethodDescriptor.<com.streaming.v1.BiDirectionalStreamingRequest, com.streaming.v1.BiDirectionalStreamingResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "BiDirectionalStreaming"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.streaming.v1.BiDirectionalStreamingRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.streaming.v1.BiDirectionalStreamingResponse.getDefaultInstance()))
              .setSchemaDescriptor(new StreamingServiceMethodDescriptorSupplier("BiDirectionalStreaming"))
              .build();
        }
      }
    }
    return getBiDirectionalStreamingMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static StreamingServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<StreamingServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<StreamingServiceStub>() {
        @java.lang.Override
        public StreamingServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new StreamingServiceStub(channel, callOptions);
        }
      };
    return StreamingServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static StreamingServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<StreamingServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<StreamingServiceBlockingStub>() {
        @java.lang.Override
        public StreamingServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new StreamingServiceBlockingStub(channel, callOptions);
        }
      };
    return StreamingServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static StreamingServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<StreamingServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<StreamingServiceFutureStub>() {
        @java.lang.Override
        public StreamingServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new StreamingServiceFutureStub(channel, callOptions);
        }
      };
    return StreamingServiceFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void serverStreaming(com.streaming.v1.ServerStreamingRequest request,
        io.grpc.stub.StreamObserver<com.streaming.v1.ServerStreamingResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getServerStreamingMethod(), responseObserver);
    }

    /**
     */
    default io.grpc.stub.StreamObserver<com.streaming.v1.ClientStreamingRequest> clientStreaming(
        io.grpc.stub.StreamObserver<com.streaming.v1.ClientStreamingResponse> responseObserver) {
      return io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall(getClientStreamingMethod(), responseObserver);
    }

    /**
     */
    default io.grpc.stub.StreamObserver<com.streaming.v1.BiDirectionalStreamingRequest> biDirectionalStreaming(
        io.grpc.stub.StreamObserver<com.streaming.v1.BiDirectionalStreamingResponse> responseObserver) {
      return io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall(getBiDirectionalStreamingMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service StreamingService.
   */
  public static abstract class StreamingServiceImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return StreamingServiceGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service StreamingService.
   */
  public static final class StreamingServiceStub
      extends io.grpc.stub.AbstractAsyncStub<StreamingServiceStub> {
    private StreamingServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected StreamingServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new StreamingServiceStub(channel, callOptions);
    }

    /**
     */
    public void serverStreaming(com.streaming.v1.ServerStreamingRequest request,
        io.grpc.stub.StreamObserver<com.streaming.v1.ServerStreamingResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getServerStreamingMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public io.grpc.stub.StreamObserver<com.streaming.v1.ClientStreamingRequest> clientStreaming(
        io.grpc.stub.StreamObserver<com.streaming.v1.ClientStreamingResponse> responseObserver) {
      return io.grpc.stub.ClientCalls.asyncClientStreamingCall(
          getChannel().newCall(getClientStreamingMethod(), getCallOptions()), responseObserver);
    }

    /**
     */
    public io.grpc.stub.StreamObserver<com.streaming.v1.BiDirectionalStreamingRequest> biDirectionalStreaming(
        io.grpc.stub.StreamObserver<com.streaming.v1.BiDirectionalStreamingResponse> responseObserver) {
      return io.grpc.stub.ClientCalls.asyncBidiStreamingCall(
          getChannel().newCall(getBiDirectionalStreamingMethod(), getCallOptions()), responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service StreamingService.
   */
  public static final class StreamingServiceBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<StreamingServiceBlockingStub> {
    private StreamingServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected StreamingServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new StreamingServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public java.util.Iterator<com.streaming.v1.ServerStreamingResponse> serverStreaming(
        com.streaming.v1.ServerStreamingRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getServerStreamingMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service StreamingService.
   */
  public static final class StreamingServiceFutureStub
      extends io.grpc.stub.AbstractFutureStub<StreamingServiceFutureStub> {
    private StreamingServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected StreamingServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new StreamingServiceFutureStub(channel, callOptions);
    }
  }

  private static final int METHODID_SERVER_STREAMING = 0;
  private static final int METHODID_CLIENT_STREAMING = 1;
  private static final int METHODID_BI_DIRECTIONAL_STREAMING = 2;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final AsyncService serviceImpl;
    private final int methodId;

    MethodHandlers(AsyncService serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_SERVER_STREAMING:
          serviceImpl.serverStreaming((com.streaming.v1.ServerStreamingRequest) request,
              (io.grpc.stub.StreamObserver<com.streaming.v1.ServerStreamingResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_CLIENT_STREAMING:
          return (io.grpc.stub.StreamObserver<Req>) serviceImpl.clientStreaming(
              (io.grpc.stub.StreamObserver<com.streaming.v1.ClientStreamingResponse>) responseObserver);
        case METHODID_BI_DIRECTIONAL_STREAMING:
          return (io.grpc.stub.StreamObserver<Req>) serviceImpl.biDirectionalStreaming(
              (io.grpc.stub.StreamObserver<com.streaming.v1.BiDirectionalStreamingResponse>) responseObserver);
        default:
          throw new AssertionError();
      }
    }
  }

  public static final io.grpc.ServerServiceDefinition bindService(AsyncService service) {
    return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
        .addMethod(
          getServerStreamingMethod(),
          io.grpc.stub.ServerCalls.asyncServerStreamingCall(
            new MethodHandlers<
              com.streaming.v1.ServerStreamingRequest,
              com.streaming.v1.ServerStreamingResponse>(
                service, METHODID_SERVER_STREAMING)))
        .addMethod(
          getClientStreamingMethod(),
          io.grpc.stub.ServerCalls.asyncClientStreamingCall(
            new MethodHandlers<
              com.streaming.v1.ClientStreamingRequest,
              com.streaming.v1.ClientStreamingResponse>(
                service, METHODID_CLIENT_STREAMING)))
        .addMethod(
          getBiDirectionalStreamingMethod(),
          io.grpc.stub.ServerCalls.asyncBidiStreamingCall(
            new MethodHandlers<
              com.streaming.v1.BiDirectionalStreamingRequest,
              com.streaming.v1.BiDirectionalStreamingResponse>(
                service, METHODID_BI_DIRECTIONAL_STREAMING)))
        .build();
  }

  private static abstract class StreamingServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    StreamingServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.streaming.v1.StreamingProto.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("StreamingService");
    }
  }

  private static final class StreamingServiceFileDescriptorSupplier
      extends StreamingServiceBaseDescriptorSupplier {
    StreamingServiceFileDescriptorSupplier() {}
  }

  private static final class StreamingServiceMethodDescriptorSupplier
      extends StreamingServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    StreamingServiceMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (StreamingServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new StreamingServiceFileDescriptorSupplier())
              .addMethod(getServerStreamingMethod())
              .addMethod(getClientStreamingMethod())
              .addMethod(getBiDirectionalStreamingMethod())
              .build();
        }
      }
    }
    return result;
  }
}
