import mongoose from "mongoose";
import { serializeError } from "serialize-error";
import IOperator from "../interfaces/IOperator"
import { HttpStatus, isQueryParamFilled } from "@noreajs/common";
import { Response, Request } from "express";
import Operator from "../models/operator";

/**
 * Manage operator
 */

class OperatorControlleur {
    /**
     * Create operator
     * @param req request
     * @param res response
     */

    async create(request: Request, response: Response) {
        try {
          try{
            let operator = new Operator({
              isactive: request.body.isactive,
              name: request.body.name,
              logo: request.body.logo,
              code: request.body.code,
            } as Partial<IOperator>);
      
            await operator.save();
      
            return response
              .status(HttpStatus.Created)
              .send((await ({ _id: operator._id, })) as IOperator);
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

export default new OperatorControlleur() as OperatorControlleur;