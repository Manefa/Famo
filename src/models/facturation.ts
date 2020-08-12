import IUser from "../interfaces/IUser";
import { mongooseModel } from "@noreajs/mongoose";
import { Schema } from "mongoose";
import { truncate } from "fs";
import ILike from "../interfaces/ILike";
import IFacturation from "../interfaces/IFacturation";

export default mongooseModel<IFacturation>({
    name: "Facturation",
    collection: "facturations",
    softDelete: true,
    schema: new Schema(
      {
        pourcentage: {
          type: Schema.Types.Number,
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