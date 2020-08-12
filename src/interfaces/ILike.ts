import { Document, ClientSession } from "mongoose";

export default interface ILike extends Document {
    user:String;
    meal:String;
    islike:Boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}