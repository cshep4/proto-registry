<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Hello\V1;

/**
 * HelloService is a sample hello world gRPC service.
 */
class HelloServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * SayHello accepts a name as part of the request and returns a greeting.
     * @param \Hello\V1\SayHelloRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SayHello(\Hello\V1\SayHelloRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/hello.v1.HelloService/SayHello',
        $argument,
        ['\Hello\V1\SayHelloResponse', 'decode'],
        $metadata, $options);
    }

}
