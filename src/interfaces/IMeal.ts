import { Document, ClientSession } from "mongoose";

export default interface IMeal extends Document {
    name:String;
    deleted:Boolean;
    description:String;
    price:Number;
    Image:String;
    userid:String;
    menuid:String;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}