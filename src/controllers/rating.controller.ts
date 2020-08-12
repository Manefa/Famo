import mongoose from "mongoose";
import { serializeError } from "serialize-error";
import IRating from "../interfaces/IRating";
import IUser from "../interfaces/IUser";
import { HttpStatus, isQueryParamFilled } from "@noreajs/common";
import { Response, Request } from "express";
import Rating from "../models/Rating";
import ratingProvider from "../providers/rating.provider";

/**
 * Manage rating
 */

class RatingControlleur {
    /**
     * Create rating
     * @param req request
     * @param res response
     */

    async create(request: Request, response: Response) {
        try {

            const userid: IUser = response.locals.user;
          try{
            let rating = new Rating({
              user: userid._id,
              meal: request.body.meal,
              note: request.body.note,
              comment:request.body.comment,
            } as Partial<IRating>);
      
            await rating.save();
      
            return response
              .status(HttpStatus.Created)
              .send((await await ratingProvider.loadFullSubcription ({ _id: rating._id, })) as IRating);
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

export default new RatingControlleur() as RatingControlleur;