import { Document, ClientSession } from "mongoose";

export default interface IWallet extends Document {
    realbalance:Number;
    virtualbalance:Number;
    date:Date;
    userid:String;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}