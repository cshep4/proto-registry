<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Streaming\V1;

/**
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
     * @param \Streaming\V1\ServerStreamingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\ServerStreamingCall
     */
    public function ServerStreaming(\Streaming\V1\ServerStreamingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_serverStreamRequest('/streaming.v1.StreamingService/ServerStreaming',
        $argument,
        ['\Streaming\V1\ServerStreamingResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\ClientStreamingCall
     */
    public function ClientStreaming($metadata = [], $options = []) {
        return $this->_clientStreamRequest('/streaming.v1.StreamingService/ClientStreaming',
        ['\Streaming\V1\ClientStreamingResponse','decode'],
        $metadata, $options);
    }

    /**
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\BidiStreamingCall
     */
    public function BiDirectionalStreaming($metadata = [], $options = []) {
        return $this->_bidiRequest('/streaming.v1.StreamingService/BiDirectionalStreaming',
        ['\Streaming\V1\BiDirectionalStreamingResponse','decode'],
        $metadata, $options);
    }

}
