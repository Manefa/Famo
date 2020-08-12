import { Document, ClientSession } from "mongoose";

export default interface IPayement extends Document {
    date:Date;
    price:String;
    status:String;
    orderid:String;
    transactionid:String;
    operatorid:String;
    deleted:Boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}