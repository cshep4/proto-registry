// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: streaming/v1/streaming.proto
// Protobuf Java Version: 4.27.1

package com.streaming.v1;

public interface UploadFileRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:streaming.v1.UploadFileRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * content is a chunk of the file content in bytes.
   * </pre>
   *
   * <code>bytes content = 1 [json_name = "content"];</code>
   * @return The content.
   */
  com.google.protobuf.ByteString getContent();
}
