// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: hello/v1/service.proto

// Protobuf Java Version: 3.25.2
package com.hello.v1;

public final class ServiceProto {
  private ServiceProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_hello_v1_SayHelloRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_hello_v1_SayHelloRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_hello_v1_SayHelloResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_hello_v1_SayHelloResponse_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\026hello/v1/service.proto\022\010hello.v1\"%\n\017Sa" +
      "yHelloRequest\022\022\n\004name\030\001 \001(\tR\004name\",\n\020Say" +
      "HelloResponse\022\030\n\007message\030\001 \001(\tR\007message2" +
      "Q\n\014HelloService\022A\n\010SayHello\022\031.hello.v1.S" +
      "ayHelloRequest\032\032.hello.v1.SayHelloRespon" +
      "seB\221\001\n\014com.hello.v1B\014ServiceProtoP\001Z2git" +
      "hub.com/cshep4/proto-repository/gen/go/h" +
      "ello/v1\242\002\003HXX\252\002\010Hello.V1\312\002\010Hello\\V1\342\002\024He" +
      "llo\\V1\\GPBMetadata\352\002\tHello::V1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_hello_v1_SayHelloRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_hello_v1_SayHelloRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_hello_v1_SayHelloRequest_descriptor,
        new java.lang.String[] { "Name", });
    internal_static_hello_v1_SayHelloResponse_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_hello_v1_SayHelloResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_hello_v1_SayHelloResponse_descriptor,
        new java.lang.String[] { "Message", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
