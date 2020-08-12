import { Document, ClientSession } from "mongoose";

export default interface ISubcription extends Document {
    following:String;
    follower:String;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}