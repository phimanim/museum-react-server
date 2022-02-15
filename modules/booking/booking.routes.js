const controllers = require("./booking.controllers");
const ROUTES = require("./booking.constants");
const express = require("express");
const middlewares = require("../../config/middlewares/auth.middlewares");

function bookingRouter(app) {
  const router = express.Router();

  router
    .get(ROUTES.getBookings, middlewares.isLoggedIn, controllers.getBookings)
    .get(ROUTES.getBookingById, middlewares.isLoggedIn, controllers.getBookingById)
    .post(ROUTES.createBooking, middlewares.isLoggedIn, controllers.createBooking)
    .put(ROUTES.updateBooking, middlewares.isLoggedIn, controllers.updateBooking)
    .delete(ROUTES.deleteBooking, middlewares.isLoggedIn, controllers.deleteBooking);

  app.use("/api", router);
}

module.exports = bookingRouter;