import IUser from "../interfaces/IUser";
import { mongooseModel } from "@noreajs/mongoose";
import { Schema } from "mongoose";
import { truncate } from "fs";
import IRating from "../interfaces/IRating";

export default mongooseModel<IRating>({
    name: "Rating",
    collection: "ratings",
    softDelete: true,
    schema: new Schema(
      {
        user: {
          type: Schema.Types.ObjectId,
          required: [true, "The name is required."],
        },
        meal: {
            type: Schema.Types.ObjectId,
            required: [true, "The name is required."],
          },
          note: {
            type: Schema.Types.Number,
            required: [true, "The name is required."],
          },
          comment: {
            type: Schema.Types.String,
            required: [true, "The name is required."],
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