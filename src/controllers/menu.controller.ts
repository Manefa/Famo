import mongoose from "mongoose";
import { serializeError } from "serialize-error";
import { HttpStatus, isQueryParamFilled } from "@noreajs/common";
import { Response, Request } from "express";
import Menu from "../models/Menu";
import IMenu from "../interfaces/IMenu";
import Meal from "../models/Meal";
import ILike from "../interfaces/ILike";
import Like from "../models/Like";
import subcriptionProvider from "../providers/subcription.provider";
import IUser from "../interfaces/IUser";
import menuProvider from "../providers/menu.provider";
import likeProvider from "../providers/like.provider";

/**
 * Manage meal
 */

class MenuController {
    /**
     * Manage menu
     * @param req request
     * @param res response
     */

    /**
     * Create menu
     * @param req request
     * @param res response
     */

    async create(request: Request, response: Response) {
        try
        {
            let menu = new Menu({
                day: request.body.day,
                userid: response.locals.user._id,
              } as Partial<IMenu>);

            await menu.save();

            return response
        .status(HttpStatus.Created)
        .send((await menuProvider.loadFullSubcription({ _id: menu._id})) as IMenu);
        }catch(error)
        {
            return response
            .status(HttpStatus.InternalServerError)
            .json(serializeError(error));
        }
    }

    async getmenu(req: Request, res: Response) {
        //query data
        const queryData: any[string] = [];
    
        await Meal.paginate(
          { menuid:  req.body.menuid},
          {
            page: parseInt((req.query.page ?? 1) as any),
            limit: parseInt((req.query.limit ?? 20) as any),
            sort: { createdAt: "desc" },
          }
        )
          .then(function (data) {
            res.status(HttpStatus.Ok).json(data);
          })
          .catch(function (err) {
            res.status(HttpStatus.InternalServerError).json(serializeError(err));
          });
      }


       /**
   * Delete menu
   * @param req request
   * @param res response
   */
  async delete(req: Request, res: Response) {
    try {
      const session = await mongoose.startSession();
      session.startTransaction();

      try {
        // update space
        await Menu.updateOne(
          { _id: req.body.id},
          {
            deleted: true,
            deletedAt: new Date(),
          } as Partial<IMenu>,
          { runValidators: true }
        );

        return res.status(HttpStatus.Ok).send();
      } catch (e) {
        await session.abortTransaction();
        session.endSession();

        throw e;
      }
    } catch (error) {
      return res.status(error.status || 500).json(serializeError(error));
    }
  }
    

}

export default new MenuController() as MenuController;