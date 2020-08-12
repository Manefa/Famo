import { Document, ClientSession } from "mongoose";

export default interface IUser extends Document {
    profilePicture?: string;
    password: string;
    role:string;
    number:number;
    username: string;
    online: boolean;
    socketId: string | undefined;
    email: string,
    emailVerifiedAt?: Date;
    locale: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    lockedAt?: Date;
    setPassword: (password: string) => void
    verifyPassword: (password: string) => boolean
}