import mongoose from "mongoose";
import { serializeError } from "serialize-error";
import { HttpStatus, isQueryParamFilled } from "@noreajs/common";
import { Response, Request } from "express";
import IWallet from "../interfaces/IWallet";
import Wallet from "../models/wallet";
import walletProvider from "../providers/wallet.provider";

/**
 * Manage meal
 */

class WalletController {
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
            let wallet = new Wallet({
                realbalance: 0,
                virtualbalance: 0,
                date : new Date(),
                userid: response.locals.user._id,
              } as Partial<IWallet>);

              console.log(wallet);

            await wallet.save();

            return response
        .status(HttpStatus.Created)
        .send((await walletProvider.loadFullSubcription({ _id: wallet._id })) as IWallet);
        }catch(error)
        {
            return response
            .status(HttpStatus.InternalServerError)
            .json(serializeError(error));
        }
    }



}

export default new WalletController() as WalletController;