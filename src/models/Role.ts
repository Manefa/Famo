import IRole from "../interfaces/IRole";
import { mongooseModel } from "@noreajs/mongoose";
import { Schema } from "mongoose";

export default mongooseModel<IRole>({
    name: "Role",
    collection: "roles",
    schema: new Schema(
      {
        name: {
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