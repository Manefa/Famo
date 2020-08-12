import { NoreaApplication } from "@noreajs/core";
import roleController from "../controllers/role.controller";

export default (app: NoreaApplication) => {
  /**
   * create role
   */
  app.route("/role/create").post([roleController.create]);

};