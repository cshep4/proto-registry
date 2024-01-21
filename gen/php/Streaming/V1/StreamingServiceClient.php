<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Streaming\V1;

/**
 * StreamingService is a gRPC service to demonstrate different types of streaming.
 */
class StreamingServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * DownloadFile is a server-streaming RPC method for downloading a file.
     * It takes a filename in the request and streams back the file content in chunks.
     * @param \Streaming\V1\DownloadFileRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\ServerStreamingCall
     */
    public function DownloadFile(\Streaming\V1\DownloadFileRequest $argument,
      $metadata = [], $options = []) {
        return $this->_serverStreamRequest('/streaming.v1.StreamingService/DownloadFile',
        $argument,
        ['\Streaming\V1\DownloadFileResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * UploadFile is a client-streaming RPC method for uploading a file.
     * It accepts a stream of bytes, which contains chunks of the file content, and
     * returns a generated file ID upon completion.
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\ClientStreamingCall
     */
    public function UploadFile($metadata = [], $options = []) {
        return $this->_clientStreamRequest('/streaming.v1.StreamingService/UploadFile',
        ['\Streaming\V1\UploadFileResponse','decode'],
        $metadata, $options);
    }

    /**
     * Echo is a bi-directional streaming RPC method.
     * It accepts a stream of messages and echos back received messages in a stream.
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\BidiStreamingCall
     */
    public function Echo($metadata = [], $options = []) {
        return $this->_bidiRequest('/streaming.v1.StreamingService/Echo',
        ['\Streaming\V1\EchoResponse','decode'],
        $metadata, $options);
    }

}
