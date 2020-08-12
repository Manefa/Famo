import mongoose from "mongoose";
import { serializeError } from "serialize-error";
import { HttpStatus, isQueryParamFilled } from "@noreajs/common";
import { Response, Request } from "express";
import ITransaction from "../interfaces/ITransaction";
import Transaction from "../models/order";
import oderProvider from "../providers/order.provider";
import IUser from "../interfaces/IUser";
import transactionProvider from "../providers/transaction.provider";
import likeProvider from "../providers/like.provider";
import ILike from "../interfaces/ILike";

/**
 * Manage meal
 */

class TransactionController {
    /**
     * Manage transaction
     * @param req request
     * @param res response
     */

    /**
     * Create transaction
     * @param req request
     * @param res response
     */

    async create(request: Request, response: Response) {
        try
        {
            let transaction = new Transaction({
                type: request.body.type,
                walletid: request.body.walletid,
                facturationid: request.body.facturationid,
              } as Partial<ITransaction>);

            await transaction.save();

            return response
        .status(HttpStatus.Created)
        .send((await transactionProvider.loadFullSubcription({ _id: transaction._id })) as ITransaction);
        }catch(error)
        {
            return response
            .status(HttpStatus.InternalServerError)
            .json(serializeError(error));
        }
    }

}

export default new TransactionController() as TransactionController;