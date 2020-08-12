import { Document, ClientSession } from "mongoose";

export default interface IMenu extends Document {
    day:String;
    deleted:Boolean;
    userid:String;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}