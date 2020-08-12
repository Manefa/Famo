import mongoose from "mongoose";
import { serializeError } from "serialize-error";
import { HttpStatus, isQueryParamFilled } from "@noreajs/common";
import { Response, Request } from "express";
import ITransaction from "../interfaces/ITransaction";
import Facturation from "../models/facturation";
import oderProvider from "../providers/order.provider";
import IUser from "../interfaces/IUser";
import facturationProvider from "../providers/facturation.provider";
import likeProvider from "../providers/like.provider";
import ILike from "../interfaces/ILike";
import IFacturation from "../interfaces/IFacturation";

/**
 * Manage meal
 */

class TransactionController {
    /**
     * Manage wallet
     * @param req request
     * @param res response
     */

    /**
     * Create wallet
     * @param req request
     * @param res response
     */

    async create(request: Request, response: Response) {
        try
        {
            let facturation = new Facturation({
                pourcentage: request.body.pourcentage,
              } as Partial<ITransaction>);

            await facturation.save();

            return response
        .status(HttpStatus.Created)
        .send((await facturationProvider.loadFullSubcription({ _id: facturation._id })) as IFacturation);
        }catch(error)
        {
            return response
            .status(HttpStatus.InternalServerError)
            .json(serializeError(error));
        }
    }

}

export default new TransactionController() as TransactionController;