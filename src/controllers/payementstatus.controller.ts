import mongoose from "mongoose";
import { serializeError } from "serialize-error";
import IPayementstatut from "../interfaces/IPayementstatut"
import { HttpStatus, isQueryParamFilled } from "@noreajs/common";
import { Response, Request } from "express";
import Payementstatus from "../models/payementstatut";

/**
 * Manage payementstatus
 */

class PayementstatusControlleur {
    /**
     * Create payementstatus
     * @param req request
     * @param res response
     */

    async create(request: Request, response: Response) {
        try {
          try{
            let payementstatus = new Payementstatus({
              code: request.body.code,
              wording: request.body.wording,
            } as Partial<IPayementstatut>);
      
            await payementstatus.save();
      
            return response
              .status(HttpStatus.Created)
              .send((await ({ _id: payementstatus._id, })) as IPayementstatut);
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

export default new PayementstatusControlleur() as PayementstatusControlleur;