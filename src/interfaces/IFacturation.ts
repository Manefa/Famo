import { Document, ClientSession } from "mongoose";

export default interface IFacturation extends Document {
    pourcentage:Number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}