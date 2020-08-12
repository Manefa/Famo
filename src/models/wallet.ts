import { mongooseModel } from "@noreajs/mongoose";
import { Schema } from "mongoose";
import IWallet from "../interfaces/IWallet";

export default mongooseModel<IWallet>({
    name: "Wallet",
    collection: "wallets",
    schema: new Schema(
      {
        realbalance: {
          type: Schema.Types.Number,
          required: [true, "The name is required."],
        },
        virtualbalance: {
            type: Schema.Types.Number,
            required: [true, "The name is required."],
          },
          date: {
            type: Schema.Types.Date,
            required: [true, "The name is required."],
          },

        deleted: {
          type: Schema.Types.Boolean,
          default:false,
        },
          userid: {
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