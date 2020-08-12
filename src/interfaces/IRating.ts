import { Document, ClientSession } from "mongoose";

export default interface IRating extends Document {
    user:String;
    meal:String;
    note:Number;
    comment:String;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}