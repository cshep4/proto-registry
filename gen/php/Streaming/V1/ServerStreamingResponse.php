<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: streaming/v1/streaming.proto

namespace Streaming\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>streaming.v1.ServerStreamingResponse</code>
 */
class ServerStreamingResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string message = 1 [json_name = "message"];</code>
     */
    protected $message = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $message
     * }
     */
    public function __construct($data = NULL) {
        \Streaming\V1\GPBMetadata\Streaming::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string message = 1 [json_name = "message"];</code>
     * @return string
     */
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * Generated from protobuf field <code>string message = 1 [json_name = "message"];</code>
     * @param string $var
     * @return $this
     */
    public function setMessage($var)
    {
        GPBUtil::checkString($var, True);
        $this->message = $var;

        return $this;
    }

}

