const controllers = require("./exhibition.controllers");
const ROUTES = require("./exhibition.constants");
const express = require("express");
const middlewares = require("../../config/middlewares/auth.middlewares");

function exhibitionRouter(app) {
  const router = express.Router();

  router
    .get(ROUTES.getExhibitions, middlewares.isLoggedIn, controllers.getExhibitions)
    .get(ROUTES.getExhibitionById, middlewares.isLoggedIn, controllers.getExhibitionById)
    .post(ROUTES.createExhibition, middlewares.isLoggedIn, controllers.createExhibition)
    .put(ROUTES.updateExhibition, middlewares.isLoggedIn, controllers.updateExhibition)
    .delete(ROUTES.deleteExhibition, middlewares.isLoggedIn, controllers.deleteExhibition);

  app.use("/api", router);
}

module.exports = exhibitionRouter;