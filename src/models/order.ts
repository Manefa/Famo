import IUser from "../interfaces/IUser";
import { mongooseModel } from "@noreajs/mongoose";
import { Schema } from "mongoose";
import IOrder from "../interfaces/IOrder";

export default mongooseModel<IOrder>({
    name: "Order",
    collection: "orders",
    softDelete: true,
    schema: new Schema(
      {
        price: {
          type: Schema.Types.Number,
          required: [true, "The name is required."],
        },
        deleveryposition: {
            type: Schema.Types.String,
            required: [true, "The name is required."],
          },
          date: {
            type: Schema.Types.Date,
            required: [true, "The name is required."],
          },
          latitude: {
            type: Schema.Types.String,
            required: [true, "The name is required."],
          },
          longitude: {
            type: Schema.Types.String,
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

          ordermeals: [{
            type: Schema.Types.ObjectId,
            required: [true, "The name is required."],
            ref: "meal"
          }],
          
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