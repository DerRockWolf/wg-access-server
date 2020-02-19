// Generated by protoc-gen-grpc-ts-web. DO NOT EDIT!
/* eslint-disable */
/* tslint:disable */

import * as jspb from 'google-protobuf';
import * as grpcWeb from 'grpc-web';

import * as googleProtobufTimestamp from 'google-protobuf/google/protobuf/timestamp_pb';
import * as googleProtobufEmpty from 'google-protobuf/google/protobuf/empty_pb';

export class Devices {

	private client_ = new grpcWeb.GrpcWebClientBase({
		format: 'text',
	});

	private methodInfoAddDevice = new grpcWeb.AbstractClientBase.MethodInfo(
		Device,
		(req: AddDeviceReq) => req.serializeBinary(),
		Device.deserializeBinary
	);

	private methodInfoListDevices = new grpcWeb.AbstractClientBase.MethodInfo(
		ListDevicesRes,
		(req: ListDevicesReq) => req.serializeBinary(),
		ListDevicesRes.deserializeBinary
	);

	private methodInfoDeleteDevice = new grpcWeb.AbstractClientBase.MethodInfo(
		googleProtobufEmpty.Empty,
		(req: DeleteDeviceReq) => req.serializeBinary(),
		googleProtobufEmpty.Empty.deserializeBinary
	);

	constructor(
		private hostname: string,
		private defaultMetadata?: () => grpcWeb.Metadata,
	) { }

	addDevice(req: AddDeviceReq.AsObject, metadata?: grpcWeb.Metadata): Promise<Device.AsObject> {
		return new Promise((resolve, reject) => {
			const message = AddDeviceReqFromObject(req);
			this.client_.rpcCall(
				this.hostname + '/proto.Devices/AddDevice',
				message,
				Object.assign({}, this.defaultMetadata ? this.defaultMetadata() : {}, metadata),
				this.methodInfoAddDevice,
				(err: grpcWeb.Error, res: Device) => {
					if (err) {
						reject(err);
					} else {
						resolve(res.toObject());
					}
				},
			);
		});
	}

	listDevices(req: ListDevicesReq.AsObject, metadata?: grpcWeb.Metadata): Promise<ListDevicesRes.AsObject> {
		return new Promise((resolve, reject) => {
			const message = ListDevicesReqFromObject(req);
			this.client_.rpcCall(
				this.hostname + '/proto.Devices/ListDevices',
				message,
				Object.assign({}, this.defaultMetadata ? this.defaultMetadata() : {}, metadata),
				this.methodInfoListDevices,
				(err: grpcWeb.Error, res: ListDevicesRes) => {
					if (err) {
						reject(err);
					} else {
						resolve(res.toObject());
					}
				},
			);
		});
	}

	deleteDevice(req: DeleteDeviceReq.AsObject, metadata?: grpcWeb.Metadata): Promise<googleProtobufEmpty.Empty.AsObject> {
		return new Promise((resolve, reject) => {
			const message = DeleteDeviceReqFromObject(req);
			this.client_.rpcCall(
				this.hostname + '/proto.Devices/DeleteDevice',
				message,
				Object.assign({}, this.defaultMetadata ? this.defaultMetadata() : {}, metadata),
				this.methodInfoDeleteDevice,
				(err: grpcWeb.Error, res: googleProtobufEmpty.Empty) => {
					if (err) {
						reject(err);
					} else {
						resolve(res.toObject());
					}
				},
			);
		});
	}

}




export declare namespace Device {
	export type AsObject = {
		name: string,
		owner: string,
		publicKey: string,
		address: string,
		createdAt?: googleProtobufTimestamp.Timestamp.AsObject,
	}
}

export class Device extends jspb.Message {

	private static repeatedFields_ = [
		
	];

	constructor(data?: jspb.Message.MessageArray) {
		super();
		jspb.Message.initialize(this, data || [], 0, -1, Device.repeatedFields_, null);
	}


	getName(): string {
		return jspb.Message.getFieldWithDefault(this, 1, "");
	}

	setName(value: string): void {
		(jspb.Message as any).setProto3StringField(this, 1, value);
	}

	getOwner(): string {
		return jspb.Message.getFieldWithDefault(this, 2, "");
	}

	setOwner(value: string): void {
		(jspb.Message as any).setProto3StringField(this, 2, value);
	}

	getPublicKey(): string {
		return jspb.Message.getFieldWithDefault(this, 3, "");
	}

	setPublicKey(value: string): void {
		(jspb.Message as any).setProto3StringField(this, 3, value);
	}

	getAddress(): string {
		return jspb.Message.getFieldWithDefault(this, 4, "");
	}

	setAddress(value: string): void {
		(jspb.Message as any).setProto3StringField(this, 4, value);
	}

	getCreatedAt(): googleProtobufTimestamp.Timestamp {
		return jspb.Message.getWrapperField(this, googleProtobufTimestamp.Timestamp, 5);
	}

	setCreatedAt(value?: googleProtobufTimestamp.Timestamp): void {
		(jspb.Message as any).setWrapperField(this, 5, value);
	}

	serializeBinary(): Uint8Array {
		const writer = new jspb.BinaryWriter();
		Device.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}

	toObject(): Device.AsObject {
		let f: any;
		return {name: this.getName(),
			owner: this.getOwner(),
			publicKey: this.getPublicKey(),
			address: this.getAddress(),
			createdAt: (f = this.getCreatedAt()) && f.toObject(),
			
		};
	}

	static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void {
		const field1 = message.getName();
		if (field1.length > 0) {
			writer.writeString(1, field1);
		}
		const field2 = message.getOwner();
		if (field2.length > 0) {
			writer.writeString(2, field2);
		}
		const field3 = message.getPublicKey();
		if (field3.length > 0) {
			writer.writeString(3, field3);
		}
		const field4 = message.getAddress();
		if (field4.length > 0) {
			writer.writeString(4, field4);
		}
		const field5 = message.getCreatedAt();
		if (field5 != null) {
			writer.writeMessage(5, field5, googleProtobufTimestamp.Timestamp.serializeBinaryToWriter);
		}
	}

	static deserializeBinary(bytes: Uint8Array): Device {
		var reader = new jspb.BinaryReader(bytes);
		var message = new Device();
		return Device.deserializeBinaryFromReader(message, reader);
	}

	static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device {
		while (reader.nextField()) {
			if (reader.isEndGroup()) {
				break;
			}
			const field = reader.getFieldNumber();
			switch (field) {
			case 1:
				const field1 = reader.readString()
				message.setName(field1);
				break;
			case 2:
				const field2 = reader.readString()
				message.setOwner(field2);
				break;
			case 3:
				const field3 = reader.readString()
				message.setPublicKey(field3);
				break;
			case 4:
				const field4 = reader.readString()
				message.setAddress(field4);
				break;
			case 5:
				const field5 = new googleProtobufTimestamp.Timestamp();
				reader.readMessage(field5, googleProtobufTimestamp.Timestamp.deserializeBinaryFromReader);
				message.setCreatedAt(field5);
				break;
			default:
				reader.skipField();
				break;
			}
		}
		return message;
	}

}
export declare namespace AddDeviceReq {
	export type AsObject = {
		name: string,
		publicKey: string,
	}
}

export class AddDeviceReq extends jspb.Message {

	private static repeatedFields_ = [
		
	];

	constructor(data?: jspb.Message.MessageArray) {
		super();
		jspb.Message.initialize(this, data || [], 0, -1, AddDeviceReq.repeatedFields_, null);
	}


	getName(): string {
		return jspb.Message.getFieldWithDefault(this, 1, "");
	}

	setName(value: string): void {
		(jspb.Message as any).setProto3StringField(this, 1, value);
	}

	getPublicKey(): string {
		return jspb.Message.getFieldWithDefault(this, 2, "");
	}

	setPublicKey(value: string): void {
		(jspb.Message as any).setProto3StringField(this, 2, value);
	}

	serializeBinary(): Uint8Array {
		const writer = new jspb.BinaryWriter();
		AddDeviceReq.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}

	toObject(): AddDeviceReq.AsObject {
		let f: any;
		return {name: this.getName(),
			publicKey: this.getPublicKey(),
			
		};
	}

	static serializeBinaryToWriter(message: AddDeviceReq, writer: jspb.BinaryWriter): void {
		const field1 = message.getName();
		if (field1.length > 0) {
			writer.writeString(1, field1);
		}
		const field2 = message.getPublicKey();
		if (field2.length > 0) {
			writer.writeString(2, field2);
		}
	}

	static deserializeBinary(bytes: Uint8Array): AddDeviceReq {
		var reader = new jspb.BinaryReader(bytes);
		var message = new AddDeviceReq();
		return AddDeviceReq.deserializeBinaryFromReader(message, reader);
	}

	static deserializeBinaryFromReader(message: AddDeviceReq, reader: jspb.BinaryReader): AddDeviceReq {
		while (reader.nextField()) {
			if (reader.isEndGroup()) {
				break;
			}
			const field = reader.getFieldNumber();
			switch (field) {
			case 1:
				const field1 = reader.readString()
				message.setName(field1);
				break;
			case 2:
				const field2 = reader.readString()
				message.setPublicKey(field2);
				break;
			default:
				reader.skipField();
				break;
			}
		}
		return message;
	}

}
export declare namespace ListDevicesReq {
	export type AsObject = {
	}
}

export class ListDevicesReq extends jspb.Message {

	private static repeatedFields_ = [
		
	];

	constructor(data?: jspb.Message.MessageArray) {
		super();
		jspb.Message.initialize(this, data || [], 0, -1, ListDevicesReq.repeatedFields_, null);
	}


	serializeBinary(): Uint8Array {
		const writer = new jspb.BinaryWriter();
		ListDevicesReq.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}

	toObject(): ListDevicesReq.AsObject {
		let f: any;
		return {
		};
	}

	static serializeBinaryToWriter(message: ListDevicesReq, writer: jspb.BinaryWriter): void {
	}

	static deserializeBinary(bytes: Uint8Array): ListDevicesReq {
		var reader = new jspb.BinaryReader(bytes);
		var message = new ListDevicesReq();
		return ListDevicesReq.deserializeBinaryFromReader(message, reader);
	}

	static deserializeBinaryFromReader(message: ListDevicesReq, reader: jspb.BinaryReader): ListDevicesReq {
		while (reader.nextField()) {
			if (reader.isEndGroup()) {
				break;
			}
			const field = reader.getFieldNumber();
			switch (field) {
			default:
				reader.skipField();
				break;
			}
		}
		return message;
	}

}
export declare namespace ListDevicesRes {
	export type AsObject = {
		items: Array<Device.AsObject>,
	}
}

export class ListDevicesRes extends jspb.Message {

	private static repeatedFields_ = [
		1,
	];

	constructor(data?: jspb.Message.MessageArray) {
		super();
		jspb.Message.initialize(this, data || [], 0, -1, ListDevicesRes.repeatedFields_, null);
	}


	getItems(): Array<Device> {
		return jspb.Message.getRepeatedWrapperField(this, Device, 1);
	}

	setItems(value: Array<Device>): void {
		(jspb.Message as any).setRepeatedWrapperField(this, 1, value);
	}
	
	addItems(value?: Device, index?: number): Device {
		return jspb.Message.addToRepeatedWrapperField(this, 1, value, Device, index);
	}

	serializeBinary(): Uint8Array {
		const writer = new jspb.BinaryWriter();
		ListDevicesRes.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}

	toObject(): ListDevicesRes.AsObject {
		let f: any;
		return {
			items: this.getItems().map((item) => item.toObject()),
		};
	}

	static serializeBinaryToWriter(message: ListDevicesRes, writer: jspb.BinaryWriter): void {
		const field1 = message.getItems();
		if (field1.length > 0) {
			writer.writeRepeatedMessage(1, field1, Device.serializeBinaryToWriter);
		}
	}

	static deserializeBinary(bytes: Uint8Array): ListDevicesRes {
		var reader = new jspb.BinaryReader(bytes);
		var message = new ListDevicesRes();
		return ListDevicesRes.deserializeBinaryFromReader(message, reader);
	}

	static deserializeBinaryFromReader(message: ListDevicesRes, reader: jspb.BinaryReader): ListDevicesRes {
		while (reader.nextField()) {
			if (reader.isEndGroup()) {
				break;
			}
			const field = reader.getFieldNumber();
			switch (field) {
			case 1:
				const field1 = new Device();
				reader.readMessage(field1, Device.deserializeBinaryFromReader);
				message.addItems(field1);
				break;
			default:
				reader.skipField();
				break;
			}
		}
		return message;
	}

}
export declare namespace DeleteDeviceReq {
	export type AsObject = {
		name: string,
	}
}

export class DeleteDeviceReq extends jspb.Message {

	private static repeatedFields_ = [
		
	];

	constructor(data?: jspb.Message.MessageArray) {
		super();
		jspb.Message.initialize(this, data || [], 0, -1, DeleteDeviceReq.repeatedFields_, null);
	}


	getName(): string {
		return jspb.Message.getFieldWithDefault(this, 1, "");
	}

	setName(value: string): void {
		(jspb.Message as any).setProto3StringField(this, 1, value);
	}

	serializeBinary(): Uint8Array {
		const writer = new jspb.BinaryWriter();
		DeleteDeviceReq.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}

	toObject(): DeleteDeviceReq.AsObject {
		let f: any;
		return {name: this.getName(),
			
		};
	}

	static serializeBinaryToWriter(message: DeleteDeviceReq, writer: jspb.BinaryWriter): void {
		const field1 = message.getName();
		if (field1.length > 0) {
			writer.writeString(1, field1);
		}
	}

	static deserializeBinary(bytes: Uint8Array): DeleteDeviceReq {
		var reader = new jspb.BinaryReader(bytes);
		var message = new DeleteDeviceReq();
		return DeleteDeviceReq.deserializeBinaryFromReader(message, reader);
	}

	static deserializeBinaryFromReader(message: DeleteDeviceReq, reader: jspb.BinaryReader): DeleteDeviceReq {
		while (reader.nextField()) {
			if (reader.isEndGroup()) {
				break;
			}
			const field = reader.getFieldNumber();
			switch (field) {
			case 1:
				const field1 = reader.readString()
				message.setName(field1);
				break;
			default:
				reader.skipField();
				break;
			}
		}
		return message;
	}

}


function DeviceFromObject(obj: Device.AsObject | undefined): Device | undefined {
	if (obj === undefined) {
		return undefined;
	}
	const message = new Device();
	message.setName(obj.name);
	message.setOwner(obj.owner);
	message.setPublicKey(obj.publicKey);
	message.setAddress(obj.address);
	message.setCreatedAt(TimestampFromObject(obj.createdAt));
	return message;
}

function TimestampFromObject(obj: googleProtobufTimestamp.Timestamp.AsObject | undefined): googleProtobufTimestamp.Timestamp | undefined {
	if (obj === undefined) {
		return undefined;
	}
	const message = new googleProtobufTimestamp.Timestamp();
	message.setSeconds(obj.seconds);
	message.setNanos(obj.nanos);
	return message;
}

function AddDeviceReqFromObject(obj: AddDeviceReq.AsObject | undefined): AddDeviceReq | undefined {
	if (obj === undefined) {
		return undefined;
	}
	const message = new AddDeviceReq();
	message.setName(obj.name);
	message.setPublicKey(obj.publicKey);
	return message;
}

function ListDevicesReqFromObject(obj: ListDevicesReq.AsObject | undefined): ListDevicesReq | undefined {
	if (obj === undefined) {
		return undefined;
	}
	const message = new ListDevicesReq();
	return message;
}

function ListDevicesResFromObject(obj: ListDevicesRes.AsObject | undefined): ListDevicesRes | undefined {
	if (obj === undefined) {
		return undefined;
	}
	const message = new ListDevicesRes();
	(obj.items || [])
		.map((item) => DeviceFromObject(item))
		.forEach((item) => message.addItems(item));
	return message;
}

function DeleteDeviceReqFromObject(obj: DeleteDeviceReq.AsObject | undefined): DeleteDeviceReq | undefined {
	if (obj === undefined) {
		return undefined;
	}
	const message = new DeleteDeviceReq();
	message.setName(obj.name);
	return message;
}

function EmptyFromObject(obj: googleProtobufEmpty.Empty.AsObject | undefined): googleProtobufEmpty.Empty | undefined {
	if (obj === undefined) {
		return undefined;
	}
	const message = new googleProtobufEmpty.Empty();
	return message;
}

