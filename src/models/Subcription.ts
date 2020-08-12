import IUser from "../interfaces/IUser";
import validator from "validator";
import { encrypt, verify } from "unixcrypt";
import { mongooseModel } from "@noreajs/mongoose";
import { Schema } from "mongoose";
import ISubcription from "../interfaces/ISubcription";

export default mongooseModel<ISubcription>({
    name: "Subcription",
    collection: "subcriptions",
    schema: new Schema(
      {
        following: {
          type: Schema.Types.ObjectId,
          required: [true, "The name is required."],
          ref: "User"
        },
        follower: {
            type: Schema.Types.ObjectId,
            required: [true, "The name is required."],
            ref: "User"
          },
        createdAt: {
            type: Date,
          },
        deletedAt: {
          type: Date,
        },
        updatedAt: {
            type: Date,
          },
      },
      {
        timestamps: true,
      }
    ),
  });