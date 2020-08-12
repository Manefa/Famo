import mongoose from "mongoose";
import { serializeError } from "serialize-error";
import { HttpStatus, isQueryParamFilled } from "@noreajs/common";
import { Response, Request } from "express";
import Menu from "../models/Menu";
import IPayement from "../interfaces/IPayement";
import Payement from "../models/payement";
import oderProvider from "../providers/order.provider";
import IUser from "../interfaces/IUser";
import menuProvider from "../providers/menu.provider";
import likeProvider from "../providers/like.provider";
import payementProvider from "../providers/payement.provider";

/**
 * Manage meal
 */

class PayementController {
    /**
     * Manage payement
     * @param req request
     * @param res response
     */

    /**
     * Create payement
     * @param req request
     * @param res response
     */

    async create(request: Request, response: Response) {
        try
        {
            let payement = new Payement({
                date: new Date(),
                price: request.body.price,
                status: request.body.status,
                orderid: request.body.orderid,
                transactionid: request.body.transactionid,
                operatorid: request.body.operatorid,
              } as Partial<IPayement>);

            await payement.save();

            return response
        .status(HttpStatus.Created)
        .send((await payementProvider.loadFullSubcription({ _id: payement._id })) as IPayement);
        }catch(error)
        {
            return response
            .status(HttpStatus.InternalServerError)
            .json(serializeError(error));
        }
    }

}

export default new PayementController() as PayementController;