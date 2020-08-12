import mongoose from "mongoose";
import { serializeError } from "serialize-error";
import { HttpStatus, isQueryParamFilled } from "@noreajs/common";
import { Response, Request } from "express";
import Subcription from "../models/Subcription";
import ISubcription from "../interfaces/ISubcription";
import subcriptionProvider from "../providers/subcription.provider"
import IUser from "../interfaces/IUser";

/**
 * Manage subcription
 */

class SubcriptionController {
    /**
     * Create Role
     * @param req request
     * @param res response
     */

    async subcribe(request: Request, response: Response) {
        try
        {
            const user: IUser = response.locals.user;
            let subcription = new Subcription({
                following: request.body._id,
                follower: user._id,
              } as Partial<ISubcription>);

            await subcription.save();

            return response
        .status(HttpStatus.Created)
        .send((await subcriptionProvider.loadFullSubcription({ _id: subcription._id })) as ISubcription);
        }catch(error)
        {
            return response
            .status(HttpStatus.InternalServerError)
            .json(serializeError(error));
        }
    }
}

export default new SubcriptionController() as SubcriptionController;