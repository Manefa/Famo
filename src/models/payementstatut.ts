import IUser from "../interfaces/IUser";
import { mongooseModel } from "@noreajs/mongoose";
import { Schema } from "mongoose";
import { truncate } from "fs";
import ILike from "../interfaces/ILike";
import IFacturation from "../interfaces/IFacturation";
import IPayementstatus from "../interfaces/IPayementstatut";

export default mongooseModel<IPayementstatus>({
    name: "Payementstatut",
    collection: "payementstatuts",
    softDelete: true,
    schema: new Schema(
      {
        code: {
          type: Schema.Types.String,
          required: [true, "The name is required."],
        },
        wording: {
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