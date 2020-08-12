import IUser from "../interfaces/IUser";
import { mongooseModel } from "@noreajs/mongoose";
import { Schema } from "mongoose";
import IMeal from "../interfaces/IMeal";

export default mongooseModel<IMeal>({
    name: "Meal",
    collection: "meals",
    softDelete: true,
    schema: new Schema(
      {
        name: {
          type: Schema.Types.String,
          required: [true, "The name is required."],
        },
        deleted: {
          type: Schema.Types.Boolean,
          default:false,
        },
        description: {
            type: Schema.Types.String,
            required: [true, "The name is required."],
          },
          price: {
            type: Schema.Types.Number,
            required: [true, "The name is required."],
          },
          image: {
            type: Schema.Types.String,
          },
          userid: {
            type: Schema.Types.ObjectId,
            required: [true, "The name is required."],
            ref: "User"
          },
          menuid: {
            type: Schema.Types.ObjectId,
            required: [true, "The name is required."],
            ref: "menu"
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