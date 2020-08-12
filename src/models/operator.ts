import IUser from "../interfaces/IUser";
import { mongooseModel } from "@noreajs/mongoose";
import { Schema } from "mongoose";
import IOperator from "../interfaces/IOperator";

export default mongooseModel<IOperator>({
    name: "Operator",
    collection: "operators",
    softDelete: true,
    schema: new Schema(
      {
        isactive: {
          type: Schema.Types.Boolean,
          required: [true, "The name is required."],
        },

        name: {
            type: Schema.Types.String,
            required: [true, "The name is required."],
          },

          logo: {
            type: Schema.Types.String,
          },

          code: {
            type: Schema.Types.String,
            required: [true, "The name is required."],
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