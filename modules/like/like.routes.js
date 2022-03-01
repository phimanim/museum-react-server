const controllers = require("./like.controllers");
const ROUTES = require("./like.constants");
const express = require("express");
const middlewares = require("../../config/middlewares/auth.middlewares");

function likeRouter(app) {
  const router = express.Router();

  router
    .get(ROUTES.getLikes, middlewares.isLoggedIn, controllers.getLikes)
    .get(ROUTES.getLikeById, middlewares.isLoggedIn, controllers.getLikeById)
    .post(ROUTES.createLike, middlewares.isLoggedIn, controllers.createLike)
    .put(ROUTES.updateLike, middlewares.isLoggedIn, controllers.updateLike)
    .delete(ROUTES.deleteLike, middlewares.isLoggedIn, controllers.deleteLike);

  app.use("/api", router);
}

module.exports = likeRouter;