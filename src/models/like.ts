import IUser from "../interfaces/IUser";
import { mongooseModel } from "@noreajs/mongoose";
import { Schema } from "mongoose";
import { truncate } from "fs";
import ILike from "../interfaces/ILike";

export default mongooseModel<ILike>({
    name: "Like",
    collection: "likes",
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
          islike: {
            type: Schema.Types.Boolean,
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