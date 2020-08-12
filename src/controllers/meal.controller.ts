import mongoose from "mongoose";
import { serializeError } from "serialize-error";
import { HttpStatus, isQueryParamFilled } from "@noreajs/common";
import { Response, Request } from "express";
import Meal from "../models/Meal";
import IMeal from "../interfaces/IMeal";
import ILike from "../interfaces/ILike";
import Like from "../models/Like";
import IOrder from "../interfaces/IOrder";
import Order from "../models/order";
import subcriptionProvider from "../providers/subcription.provider";
import IUser from "../interfaces/IUser";
import mealProvider from "../providers/meal.provider";
import likeProvider from "../providers/like.provider";

/**
 * Manage meal
 */

class MealController {
    /**
     * Create meal
     * @param req request
     * @param res response
     */

    async create(request: Request, response: Response) {
        try
        {
            let meal = new Meal({
                name: request.body.name,
                description: request.body.description,
                price: request.body.price,
                userid: response.locals.user._id,
                menuid: request.body.menuid,
              } as Partial<IMeal>);

            await meal.save();

            return response
        .status(HttpStatus.Created)
        .send((await mealProvider.loadFullSubcription({ _id: meal._id})) as IMeal);
        }catch(error)
        {
            return response
            .status(HttpStatus.InternalServerError)
            .json(serializeError(error));
        }
    }


    async like(request: Request, response: Response) {
        try
        {
            const userid: IUser = response.locals.user;
            let like = new Like({
                user : userid._id,
                meal : request.body.meal,
                islike: true,
              } as Partial<ILike>);

            await like.save();

            return response
        .status(HttpStatus.Created)
        .send((await likeProvider.loadFullSubcription({ _id: like._id })) as ILike);
        }catch(error)
        {
            return response
            .status(HttpStatus.InternalServerError)
            .json(serializeError(error));
        }
    }

    async edit(req: Request, res: Response) {
        try {
          const session = await mongoose.startSession();
          session.startTransaction();
    
          try {
            // update space
            await Meal.updateOne(
              { _id: req.body.id },
              {
                name:req.body.name,
                description:req.body.description,
                price:req.body.price,
                updateAt: new Date(),
              } as Partial<IMeal>,
              { runValidators: true }
            );
    
            return res.status(HttpStatus.Ok)
                      .send((await mealProvider.loadFullSubcription({ _id: req.body.id})) as IMeal);
          } catch (e) {
            await session.abortTransaction();
            session.endSession();
    
            throw e;
          }
        } catch (error) {
          return res.status(error.status || 500).json(serializeError(error));
          
        }
      }


  /**
   * Delete meal
   * @param req request
   * @param res response
   */
  async delete(req: Request, res: Response) {
    try {
      const session = await mongoose.startSession();
      session.startTransaction();

      try {
        // update space
        await Meal.updateOne(
          { _id: req.body.id},
          {
            deleted: true,
            deletedAt: new Date(),
          } as Partial<IMeal>,
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

  async dislike(req: Request, res: Response) {
    try {
      const session = await mongoose.startSession();
      session.startTransaction();

      try {
        // update space
        await Like.updateOne(
          { meal: req.body.meal},
          {
            islike: false,
            updateAt: new Date(),
          } as Partial<IMeal>,
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

  /**
   * Get all users
   * @param req request
   * @param res response
   */
  async all(req: Request, res: Response) {
    //query data
    const queryData: any[string] = [];

    // username
    if (isQueryParamFilled(req.query.id) ) {
      queryData["id"] = { $regex: `.*${res.locals.meal.userid}.*` };
    }

    await Meal.paginate(
      {  deleted: false },
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
   * Get all users
   * @param req request
   * @param res response
   */
  async getone(req: Request, res: Response) {
    //query data
    const queryData: any[string] = [];

    await Meal.paginate(
      { name:  req.body.name, deleted: false},
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

}

export default new MealController() as MealController;