import IUser from "../interfaces/IUser";
import { mongooseModel } from "@noreajs/mongoose";
import { Schema } from "mongoose";
import IMenu from "../interfaces/IMenu";

export default mongooseModel<IMenu>({
    name: "Menu",
    collection: "menus",
    softDelete: true,
    schema: new Schema(
      {
        day: {
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