import { Document, ClientSession } from "mongoose";

export default interface IPayementstatus extends Document {
    code:String;
    wording:String;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}