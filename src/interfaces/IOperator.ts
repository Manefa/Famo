import { Document, ClientSession } from "mongoose";

export default interface IOperator extends Document {
    isactive:Boolean;
    name:String;
    logo:String;
    code:String;
    deleted:Boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}