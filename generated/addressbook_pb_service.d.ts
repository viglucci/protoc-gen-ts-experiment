// package: foo
// file: addressbook.proto

import * as addressbook_pb from "./addressbook_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DirLookupByName = {
  readonly methodName: string;
  readonly service: typeof DirLookup;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof addressbook_pb.Name;
  readonly responseType: typeof addressbook_pb.LookupResult;
};

export class DirLookup {
  static readonly serviceName: string;
  static readonly ByName: DirLookupByName;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class DirLookupClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  byName(
    requestMessage: addressbook_pb.Name,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: addressbook_pb.LookupResult|null) => void
  ): UnaryResponse;
  byName(
    requestMessage: addressbook_pb.Name,
    callback: (error: ServiceError|null, responseMessage: addressbook_pb.LookupResult|null) => void
  ): UnaryResponse;
}

