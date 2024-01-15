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
