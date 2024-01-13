/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export const protobufPackage = "streaming.v1";

export interface ServerStreamingRequest {
  message: string;
}

export interface ServerStreamingResponse {
  message: string;
}

export interface ClientStreamingRequest {
  name: string;
}

export interface ClientStreamingResponse {
  receivedMessages: string[];
}

export interface BiDirectionalStreamingRequest {
  name: string;
}

export interface BiDirectionalStreamingResponse {
  message: string;
}

function createBaseServerStreamingRequest(): ServerStreamingRequest {
  return { message: "" };
}

export const ServerStreamingRequest = {
  encode(message: ServerStreamingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerStreamingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerStreamingRequest();
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

  fromJSON(object: any): ServerStreamingRequest {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: ServerStreamingRequest): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServerStreamingRequest>, I>>(base?: I): ServerStreamingRequest {
    return ServerStreamingRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServerStreamingRequest>, I>>(object: I): ServerStreamingRequest {
    const message = createBaseServerStreamingRequest();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseServerStreamingResponse(): ServerStreamingResponse {
  return { message: "" };
}

export const ServerStreamingResponse = {
  encode(message: ServerStreamingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerStreamingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerStreamingResponse();
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

  fromJSON(object: any): ServerStreamingResponse {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: ServerStreamingResponse): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServerStreamingResponse>, I>>(base?: I): ServerStreamingResponse {
    return ServerStreamingResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServerStreamingResponse>, I>>(object: I): ServerStreamingResponse {
    const message = createBaseServerStreamingResponse();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseClientStreamingRequest(): ClientStreamingRequest {
  return { name: "" };
}

export const ClientStreamingRequest = {
  encode(message: ClientStreamingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientStreamingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientStreamingRequest();
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

  fromJSON(object: any): ClientStreamingRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: ClientStreamingRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClientStreamingRequest>, I>>(base?: I): ClientStreamingRequest {
    return ClientStreamingRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClientStreamingRequest>, I>>(object: I): ClientStreamingRequest {
    const message = createBaseClientStreamingRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseClientStreamingResponse(): ClientStreamingResponse {
  return { receivedMessages: [] };
}

export const ClientStreamingResponse = {
  encode(message: ClientStreamingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.receivedMessages) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientStreamingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientStreamingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.receivedMessages.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClientStreamingResponse {
    return {
      receivedMessages: globalThis.Array.isArray(object?.receivedMessages)
        ? object.receivedMessages.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ClientStreamingResponse): unknown {
    const obj: any = {};
    if (message.receivedMessages?.length) {
      obj.receivedMessages = message.receivedMessages;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClientStreamingResponse>, I>>(base?: I): ClientStreamingResponse {
    return ClientStreamingResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClientStreamingResponse>, I>>(object: I): ClientStreamingResponse {
    const message = createBaseClientStreamingResponse();
    message.receivedMessages = object.receivedMessages?.map((e) => e) || [];
    return message;
  },
};

function createBaseBiDirectionalStreamingRequest(): BiDirectionalStreamingRequest {
  return { name: "" };
}

export const BiDirectionalStreamingRequest = {
  encode(message: BiDirectionalStreamingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BiDirectionalStreamingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBiDirectionalStreamingRequest();
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

  fromJSON(object: any): BiDirectionalStreamingRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: BiDirectionalStreamingRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BiDirectionalStreamingRequest>, I>>(base?: I): BiDirectionalStreamingRequest {
    return BiDirectionalStreamingRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BiDirectionalStreamingRequest>, I>>(
    object: I,
  ): BiDirectionalStreamingRequest {
    const message = createBaseBiDirectionalStreamingRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseBiDirectionalStreamingResponse(): BiDirectionalStreamingResponse {
  return { message: "" };
}

export const BiDirectionalStreamingResponse = {
  encode(message: BiDirectionalStreamingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BiDirectionalStreamingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBiDirectionalStreamingResponse();
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

  fromJSON(object: any): BiDirectionalStreamingResponse {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: BiDirectionalStreamingResponse): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BiDirectionalStreamingResponse>, I>>(base?: I): BiDirectionalStreamingResponse {
    return BiDirectionalStreamingResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BiDirectionalStreamingResponse>, I>>(
    object: I,
  ): BiDirectionalStreamingResponse {
    const message = createBaseBiDirectionalStreamingResponse();
    message.message = object.message ?? "";
    return message;
  },
};

export interface StreamingService {
  ServerStreaming(request: ServerStreamingRequest): Observable<ServerStreamingResponse>;
  ClientStreaming(request: Observable<ClientStreamingRequest>): Promise<ClientStreamingResponse>;
  BiDirectionalStreaming(
    request: Observable<BiDirectionalStreamingRequest>,
  ): Observable<BiDirectionalStreamingResponse>;
}

export const StreamingServiceServiceName = "streaming.v1.StreamingService";
export class StreamingServiceClientImpl implements StreamingService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || StreamingServiceServiceName;
    this.rpc = rpc;
    this.ServerStreaming = this.ServerStreaming.bind(this);
    this.ClientStreaming = this.ClientStreaming.bind(this);
    this.BiDirectionalStreaming = this.BiDirectionalStreaming.bind(this);
  }
  ServerStreaming(request: ServerStreamingRequest): Observable<ServerStreamingResponse> {
    const data = ServerStreamingRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(this.service, "ServerStreaming", data);
    return result.pipe(map((data) => ServerStreamingResponse.decode(_m0.Reader.create(data))));
  }

  ClientStreaming(request: Observable<ClientStreamingRequest>): Promise<ClientStreamingResponse> {
    const data = request.pipe(map((request) => ClientStreamingRequest.encode(request).finish()));
    const promise = this.rpc.clientStreamingRequest(this.service, "ClientStreaming", data);
    return promise.then((data) => ClientStreamingResponse.decode(_m0.Reader.create(data)));
  }

  BiDirectionalStreaming(
    request: Observable<BiDirectionalStreamingRequest>,
  ): Observable<BiDirectionalStreamingResponse> {
    const data = request.pipe(map((request) => BiDirectionalStreamingRequest.encode(request).finish()));
    const result = this.rpc.bidirectionalStreamingRequest(this.service, "BiDirectionalStreaming", data);
    return result.pipe(map((data) => BiDirectionalStreamingResponse.decode(_m0.Reader.create(data))));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
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
