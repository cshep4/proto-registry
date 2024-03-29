<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: streaming/v1/streaming.proto

namespace Streaming\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * UploadFileResponse is the response message after a file upload is complete.
 * It contains an ID that uniquely identifies the uploaded file.
 *
 * Generated from protobuf message <code>streaming.v1.UploadFileResponse</code>
 */
class UploadFileResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * id is the unique identifier for the uploaded file.
     *
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     */
    protected $id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *           id is the unique identifier for the uploaded file.
     * }
     */
    public function __construct($data = NULL) {
        \Streaming\V1\GPBMetadata\Streaming::initOnce();
        parent::__construct($data);
    }

    /**
     * id is the unique identifier for the uploaded file.
     *
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     * @return string
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * id is the unique identifier for the uploaded file.
     *
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     * @param string $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkString($var, True);
        $this->id = $var;

        return $this;
    }

}

