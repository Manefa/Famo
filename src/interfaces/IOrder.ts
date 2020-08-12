import { Document, ClientSession } from "mongoose";

export default interface IOder extends Document {
    price:Number;
    deiveryposition:String;
    date:Date;
    latitude:String;
    longitude:String;
    ordermeals: String;
    deleted:Boolean;
    userid:String;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}