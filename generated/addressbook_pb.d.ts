// package: foo
// file: addressbook.proto

import * as jspb from "google-protobuf";

export class Person extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getId(): number;
  setId(value: number): void;

  getEmail(): string;
  setEmail(value: string): void;

  clearPhoneList(): void;
  getPhoneList(): Array<Person.PhoneNumber>;
  setPhoneList(value: Array<Person.PhoneNumber>): void;
  addPhone(value?: Person.PhoneNumber, index?: number): Person.PhoneNumber;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Person.AsObject;
  static toObject(includeInstance: boolean, msg: Person): Person.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Person, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Person;
  static deserializeBinaryFromReader(message: Person, reader: jspb.BinaryReader): Person;
}

export namespace Person {
  export type AsObject = {
    name: string,
    id: number,
    email: string,
    phoneList: Array<Person.PhoneNumber.AsObject>,
  }

  export class PhoneNumber extends jspb.Message {
    getNumber(): string;
    setNumber(value: string): void;

    getType(): Person.PhoneTypeMap[keyof Person.PhoneTypeMap];
    setType(value: Person.PhoneTypeMap[keyof Person.PhoneTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PhoneNumber.AsObject;
    static toObject(includeInstance: boolean, msg: PhoneNumber): PhoneNumber.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PhoneNumber, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PhoneNumber;
    static deserializeBinaryFromReader(message: PhoneNumber, reader: jspb.BinaryReader): PhoneNumber;
  }

  export namespace PhoneNumber {
    export type AsObject = {
      number: string,
      type: Person.PhoneTypeMap[keyof Person.PhoneTypeMap],
    }
  }

  export interface PhoneTypeMap {
    MOBILE: 0;
    HOME: 1;
    WORK: 2;
  }

  export const PhoneType: PhoneTypeMap;
}

export class LookupResult extends jspb.Message {
  hasPerson(): boolean;
  clearPerson(): void;
  getPerson(): Person | undefined;
  setPerson(value?: Person): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupResult.AsObject;
  static toObject(includeInstance: boolean, msg: LookupResult): LookupResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LookupResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupResult;
  static deserializeBinaryFromReader(message: LookupResult, reader: jspb.BinaryReader): LookupResult;
}

export namespace LookupResult {
  export type AsObject = {
    person?: Person.AsObject,
  }
}

export class Name extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Name.AsObject;
  static toObject(includeInstance: boolean, msg: Name): Name.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Name, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Name;
  static deserializeBinaryFromReader(message: Name, reader: jspb.BinaryReader): Name;
}

export namespace Name {
  export type AsObject = {
    name: string,
  }
}

