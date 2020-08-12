import mongoose from "mongoose";
import { serializeError } from "serialize-error";
import { HttpStatus, isQueryParamFilled } from "@noreajs/common";
import { Response, Request } from "express";
import Menu from "../models/Menu";
import IOrder from "../interfaces/IOrder";
import Order from "../models/order";
import oderProvider from "../providers/order.provider";
import IUser from "../interfaces/IUser";
import menuProvider from "../providers/menu.provider";
import likeProvider from "../providers/like.provider";

class OrderController {
    /**
     * Manage order
     * @param req request
     * @param res response
     */

    /**
     * Create order
     * @param req request
     * @param res response
     */

    async create(request: Request, response: Response) {
        try
        {
            let order = new Order({
                price: request.body.price,
                deleveryposition: request.body.deleveryposition,
                date: new Date(),
                latitude: request.body.latitude,
                longitude: request.body.longitude,
                userid: response.locals.user._id,
                ordermeals: request.body.ordermeals,
              } as Partial<IOrder>);

            await order.save();

            return response
        .status(HttpStatus.Created)
        .send((await oderProvider.loadFullSubcription({ _id: order._id })) as IOrder);
        }catch(error)
        {
            return response
            .status(HttpStatus.InternalServerError)
            .json(serializeError(error));
        }
    }

}

export default new OrderController() as OrderController;