/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "hello.v1";

export interface SayHelloRequest {
  name: string;
}

export interface SayHelloResponse {
  message: string;
}

function createBaseSayHelloRequest(): SayHelloRequest {
  return { name: "" };
}

export const SayHelloRequest = {
  encode(message: SayHelloRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SayHelloRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSayHelloRequest();
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

  fromJSON(object: any): SayHelloRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: SayHelloRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SayHelloRequest>, I>>(base?: I): SayHelloRequest {
    return SayHelloRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SayHelloRequest>, I>>(object: I): SayHelloRequest {
    const message = createBaseSayHelloRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseSayHelloResponse(): SayHelloResponse {
  return { message: "" };
}

export const SayHelloResponse = {
  encode(message: SayHelloResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SayHelloResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSayHelloResponse();
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

  fromJSON(object: any): SayHelloResponse {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: SayHelloResponse): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SayHelloResponse>, I>>(base?: I): SayHelloResponse {
    return SayHelloResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SayHelloResponse>, I>>(object: I): SayHelloResponse {
    const message = createBaseSayHelloResponse();
    message.message = object.message ?? "";
    return message;
  },
};

export interface HelloService {
  SayHello(request: SayHelloRequest): Promise<SayHelloResponse>;
}

export const HelloServiceServiceName = "hello.v1.HelloService";
export class HelloServiceClientImpl implements HelloService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || HelloServiceServiceName;
    this.rpc = rpc;
    this.SayHello = this.SayHello.bind(this);
  }
  SayHello(request: SayHelloRequest): Promise<SayHelloResponse> {
    const data = SayHelloRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SayHello", data);
    return promise.then((data) => SayHelloResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
