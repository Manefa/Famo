import { Document, ClientSession } from "mongoose";

export default interface ITransaction extends Document {
    type:String;
    walletid:String;
    facturationid:String;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}