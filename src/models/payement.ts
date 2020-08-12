import IUser from "../interfaces/IUser";
import { mongooseModel } from "@noreajs/mongoose";
import { Schema } from "mongoose";
import IMenu from "../interfaces/IMenu";
import IPayement from "../interfaces/IPayement";

export default mongooseModel<IPayement>({
    name: "Payement",
    collection: "payements",
    softDelete: true,
    schema: new Schema(
      {
        date: {
          type: Schema.Types.Date,
          required: [true, "The name is required."],
        },

        price: {
            type: Schema.Types.Number,
            required: [true, "The name is required."],
          },

          status: {
            type: Schema.Types.ObjectId,
            required: [true, "The name is required."],
            ref : "payementstatus"
          },

          orderid: {
            type: Schema.Types.ObjectId,
            required: [true, "The name is required."],
            ref: "order"
          },

          transactionid: {
            type: Schema.Types.ObjectId,
            required: [true, "The name is required."],
            ref: "transaction"
          },

          operatorid: {
            type: Schema.Types.ObjectId,
            required: [true, "The name is required."],
            ref: "operator"
          },

          deleted: {
            type: Schema.Types.Boolean,
            default:false,
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