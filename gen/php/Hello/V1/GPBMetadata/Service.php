<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: hello/v1/service.proto

namespace Hello\V1\GPBMetadata;

class Service
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
hello/v1/service.protohello.v1"%
SayHelloRequest
name (	Rname",
SayHelloResponse
message (	Rmessage2Q
HelloServiceA
SayHello.hello.v1.SayHelloRequest.hello.v1.SayHelloResponseB�
com.hello.v1BServiceProtoPZ0github.com/cshep4/proto-registry/gen/go/hello/v1�HXX�Hello.V1�Hello\\V1�Hello\\V1\\GPBMetadata�	Hello::V1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

