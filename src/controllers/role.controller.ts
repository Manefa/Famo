import mongoose from "mongoose";
import { serializeError } from "serialize-error";
import IRole from "../interfaces/IRole"
import { HttpStatus, isQueryParamFilled } from "@noreajs/common";
import { Response, Request } from "express";
import Role from "../models/Role";

/**
 * Manage role
 */

class RoleControlleur {
    /**
     * Create Role
     * @param req request
     * @param res response
     */

    async create(request: Request, response: Response) {
        try {
          try{
            let role = new Role({
              name: request.body.name,
            } as Partial<IRole>);
      
            await role.save();
      
            return response
              .status(HttpStatus.Created)
              .send((await ({ _id: role._id, })) as IRole);
          } 
          catch(e)
          {
            throw e;
          }
        } catch (error) {

          return response
            .status(HttpStatus.InternalServerError)
            .json(serializeError(error));
        }
    }
}

export default new RoleControlleur() as RoleControlleur;