const controllers = require("./museum.controllers");
const ROUTES = require("./museum.constants");
const express = require("express");
const middlewares = require("../../config/middlewares/auth.middlewares");

function museumRouter(app) {
  const router = express.Router();

  router
    .get(ROUTES.getMuseums, middlewares.isLoggedIn, controllers.getMuseums)
    .get(ROUTES.getMuseumById, middlewares.isLoggedIn, controllers.getMuseumById)
    .get(ROUTES.addExhibitions, middlewares.isLoggedIn, controllers.addExhibitions)
    .post(ROUTES.createMuseum, middlewares.isLoggedIn, controllers.createMuseum)
    .put(ROUTES.updateMuseum, middlewares.isLoggedIn, controllers.updateMuseum)
    .delete(ROUTES.deleteMuseum, middlewares.isLoggedIn, controllers.deleteMuseum);

  app.use("/api", router);
}

module.exports = museumRouter;