/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export const protobufPackage = "streaming.v1";

/**
 * DownloadFileRequest is the request message for downloading a file.
 * It contains the name of the file to be downloaded from the server.
 */
export interface DownloadFileRequest {
  /** name is the name of the file to download. */
  name: string;
}

/**
 * DownloadFileResponse is the response message for downloading a file.
 * It contains a chunk of the file content.
 */
export interface DownloadFileResponse {
  /** content is a chunk of the file content in bytes. */
  content: Uint8Array;
}

/**
 * UploadFileRequest is the request message for uploading a file.
 * It contains a chunk of the file content.
 */
export interface UploadFileRequest {
  /** content is a chunk of the file content in bytes. */
  content: Uint8Array;
}

/**
 * UploadFileResponse is the response message after a file upload is complete.
 * It contains an ID that uniquely identifies the uploaded file.
 */
export interface UploadFileResponse {
  /** id is the unique identifier for the uploaded file. */
  id: string;
}

/**
 * EchoRequest is the request message for the Echo RPC.
 * It contains a message that will be echoed back by the server.
 */
export interface EchoRequest {
  /** message is the message to be echoed. */
  message: string;
}

/**
 * EchoResponse is the response message for the Echo RPC.
 * It contains the 'message' that was echoed back by the server.
 */
export interface EchoResponse {
  /** message is the echoed message. */
  message: string;
}

function createBaseDownloadFileRequest(): DownloadFileRequest {
  return { name: "" };
}

export const DownloadFileRequest = {
  encode(message: DownloadFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DownloadFileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDownloadFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DownloadFileRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: DownloadFileRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DownloadFileRequest>, I>>(base?: I): DownloadFileRequest {
    return DownloadFileRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DownloadFileRequest>, I>>(object: I): DownloadFileRequest {
    const message = createBaseDownloadFileRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseDownloadFileResponse(): DownloadFileResponse {
  return { content: new Uint8Array(0) };
}

export const DownloadFileResponse = {
  encode(message: DownloadFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content.length !== 0) {
      writer.uint32(10).bytes(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DownloadFileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDownloadFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DownloadFileResponse {
    return { content: isSet(object.content) ? bytesFromBase64(object.content) : new Uint8Array(0) };
  },

  toJSON(message: DownloadFileResponse): unknown {
    const obj: any = {};
    if (message.content.length !== 0) {
      obj.content = base64FromBytes(message.content);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DownloadFileResponse>, I>>(base?: I): DownloadFileResponse {
    return DownloadFileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DownloadFileResponse>, I>>(object: I): DownloadFileResponse {
    const message = createBaseDownloadFileResponse();
    message.content = object.content ?? new Uint8Array(0);
    return message;
  },
};

function createBaseUploadFileRequest(): UploadFileRequest {
  return { content: new Uint8Array(0) };
}

export const UploadFileRequest = {
  encode(message: UploadFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content.length !== 0) {
      writer.uint32(10).bytes(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UploadFileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUploadFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UploadFileRequest {
    return { content: isSet(object.content) ? bytesFromBase64(object.content) : new Uint8Array(0) };
  },

  toJSON(message: UploadFileRequest): unknown {
    const obj: any = {};
    if (message.content.length !== 0) {
      obj.content = base64FromBytes(message.content);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UploadFileRequest>, I>>(base?: I): UploadFileRequest {
    return UploadFileRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UploadFileRequest>, I>>(object: I): UploadFileRequest {
    const message = createBaseUploadFileRequest();
    message.content = object.content ?? new Uint8Array(0);
    return message;
  },
};

function createBaseUploadFileResponse(): UploadFileResponse {
  return { id: "" };
}

export const UploadFileResponse = {
  encode(message: UploadFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UploadFileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUploadFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UploadFileResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: UploadFileResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UploadFileResponse>, I>>(base?: I): UploadFileResponse {
    return UploadFileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UploadFileResponse>, I>>(object: I): UploadFileResponse {
    const message = createBaseUploadFileResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseEchoRequest(): EchoRequest {
  return { message: "" };
}

export const EchoRequest = {
  encode(message: EchoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EchoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEchoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EchoRequest {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: EchoRequest): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EchoRequest>, I>>(base?: I): EchoRequest {
    return EchoRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EchoRequest>, I>>(object: I): EchoRequest {
    const message = createBaseEchoRequest();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseEchoResponse(): EchoResponse {
  return { message: "" };
}

export const EchoResponse = {
  encode(message: EchoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EchoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEchoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EchoResponse {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: EchoResponse): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EchoResponse>, I>>(base?: I): EchoResponse {
    return EchoResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EchoResponse>, I>>(object: I): EchoResponse {
    const message = createBaseEchoResponse();
    message.message = object.message ?? "";
    return message;
  },
};

/** StreamingService is a gRPC service to demonstrate different types of streaming. */
export interface StreamingService {
  /**
   * DownloadFile is a server-streaming RPC method for downloading a file.
   * It takes a filename in the request and streams back the file content in chunks.
   */
  DownloadFile(request: DownloadFileRequest): Observable<DownloadFileResponse>;
  /**
   * UploadFile is a client-streaming RPC method for uploading a file.
   * It accepts a stream of bytes, which contains chunks of the file content, and
   * returns a generated file ID upon completion.
   */
  UploadFile(request: Observable<UploadFileRequest>): Promise<UploadFileResponse>;
  /**
   * Echo is a bi-directional streaming RPC method.
   * It accepts a stream of messages and echos back received messages in a stream.
   */
  Echo(request: Observable<EchoRequest>): Observable<EchoResponse>;
}

export const StreamingServiceServiceName = "streaming.v1.StreamingService";
export class StreamingServiceClientImpl implements StreamingService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || StreamingServiceServiceName;
    this.rpc = rpc;
    this.DownloadFile = this.DownloadFile.bind(this);
    this.UploadFile = this.UploadFile.bind(this);
    this.Echo = this.Echo.bind(this);
  }
  DownloadFile(request: DownloadFileRequest): Observable<DownloadFileResponse> {
    const data = DownloadFileRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(this.service, "DownloadFile", data);
    return result.pipe(map((data) => DownloadFileResponse.decode(_m0.Reader.create(data))));
  }

  UploadFile(request: Observable<UploadFileRequest>): Promise<UploadFileResponse> {
    const data = request.pipe(map((request) => UploadFileRequest.encode(request).finish()));
    const promise = this.rpc.clientStreamingRequest(this.service, "UploadFile", data);
    return promise.then((data) => UploadFileResponse.decode(_m0.Reader.create(data)));
  }

  Echo(request: Observable<EchoRequest>): Observable<EchoResponse> {
    const data = request.pipe(map((request) => EchoRequest.encode(request).finish()));
    const result = this.rpc.bidirectionalStreamingRequest(this.service, "Echo", data);
    return result.pipe(map((data) => EchoResponse.decode(_m0.Reader.create(data))));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
