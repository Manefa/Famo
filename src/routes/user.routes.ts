import authMiddleware from "../middlewares/auth.middleware";
import userController from "../controllers/user.controller";
import { Oauth } from "@noreajs/oauth-v2-provider-me";
import { NoreaApplication } from "@noreajs/core";
import subcriptionController from "../controllers/subcription.controller";
import mealController from "../controllers/meal.controller";
import menuController from "../controllers/menu.controller";
import payementController from "../controllers/payement.controller";
import ratingController from "../controllers/rating.controller";
import orderController from "../controllers/order.controller";
import transactionController from "../controllers/transaction.controller";
import facturationController from "../controllers/facturation.controller";
import operatorController from "../controllers/operator.controller";
import walletController from "../controllers/wallet.controller";

export default (app: NoreaApplication) => {
  /**
   * Get online users count
   */
  app.route("/realtime/count/online-users").get(userController.onlineUsers);

  /**
   * Get connected users count
   */
  app
    .route("/realtime/count/connected-users")
    .get(userController.connectedUsers);

  /**
   * Get user lists
   */
  app
    .route("/users")
    .get([Oauth.authorize(), userController.all]);

  /**
   * update user lock state (locked or unlocked)
   */
  app
    .route("/users/:id/lock-state")
    .put([
      Oauth.authorize(),
      userController.editLockedState,
    ]);

  /**
   * Show user
   */
  app
    .route("/users/:id")
    .get([Oauth.authorize(), userController.show]);

  /**
   * Edit user
   */
  app.route("/users/:id").put([
    Oauth.authorize(),
    userController.edit
  ]);

  /**
   * Get the current user details
   */
  app
    .route("/current-user")
    .get([Oauth.authorize(), userController.currentUser]);

  /**
   * Delete user account
   */
  app.route("/users/:id").delete([Oauth.authorize(), userController.delete]);

  /**
   * subcribe
   */
  app.route("/users/subcribe").post([Oauth.authorize(), subcriptionController.subcribe]);

  /**
   * add meal
   */
  app.route("/users/meal/create").post([Oauth.authorize(), mealController.create]);

  /**
   * update meal
   */
  app.route("/users/meal/update").put([Oauth.authorize(), mealController.edit]);

  /**
   * delete meal
   */
  app.route("/users/meal/delete").delete([Oauth.authorize(), mealController.delete]);

  /**
   * getall meal
   */
  app.route("/users/meal/getall").get([Oauth.authorize(), mealController.all]);

   /**
   * get one meal
   */
  app.route("/users/meal/getone").get([Oauth.authorize(), mealController.getone]);

  /**
   * like meal
   */
  app.route("/users/meal/like").post([Oauth.authorize(), mealController.like]);

  /**
   * dislike meal
   */
  app.route("/users/meal/dislike").put([Oauth.authorize(), mealController.dislike]);

  /**
   * rating meal
   */
  app.route("/users/meal/rating").post([Oauth.authorize(), ratingController.create]);

  /**
   * add menu
   */
  app.route("/users/menu/create").post([Oauth.authorize(), menuController.create]);

  /**
   * get menu
   */
  app.route("/users/menu/get").get([Oauth.authorize(), menuController.getmenu]);

   /**
   * command meals
   */
  app.route("/users/order/command").post([Oauth.authorize(), orderController.create]);


  /**
   * pay command
   */
  app.route("/users/order/pay").post([Oauth.authorize(), payementController.create]);

  /**
   * wallet create
   */
  app.route("/users/wallet/init").post([Oauth.authorize(), walletController.create]);


  /**
   * transaction create
   */
  app.route("/users/transaction/init").post([Oauth.authorize(), transactionController.create]);

  /**
   * facturation create
   */
  app.route("/users/facturation/init").post([Oauth.authorize(), facturationController.create]);

  /**
   * operator create
   */
  app.route("/users/operator/init").post([Oauth.authorize(), operatorController.create]);

};
