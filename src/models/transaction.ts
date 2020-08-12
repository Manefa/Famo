import IUser from "../interfaces/IUser";
import { mongooseModel } from "@noreajs/mongoose";
import { Schema } from "mongoose";
import { truncate } from "fs";
import ILike from "../interfaces/ILike";
import ITransaction from "../interfaces/ITransaction";

export default mongooseModel<ITransaction>({
    name: "Transaction",
    collection: "transactions",
    softDelete: true,
    schema: new Schema(
      {
        type: {
          type: Schema.Types.String,
          required: [true, "The name is required."],
        },
        walletid: {
            type: Schema.Types.ObjectId,
            required: [true, "The name is required."],
            ref :  "wallet"
          },
          facturationid: {
            type: Schema.Types.ObjectId,
            required: [true, "The name is required."],
            ref :  "wallet"
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