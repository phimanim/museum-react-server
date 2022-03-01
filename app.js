const express = require("express");
const museumRouter = require("./modules/museum");
const exhibitionRouter = require("./modules/exhibition");
const bookingRouter = require("./modules/booking");
const authRouter = require("./modules/auth");
const filesRouter = require("./modules/files");
const { connectDb, middlewares, sessionConfig } = require("./config");
const likeRouter = require("./modules/like/like.routes");

async function start() {
  try {
    const { PORT } = process.env;
    const app = express();
    // db
    await connectDb();
    // middlewares
    middlewares(app);
    sessionConfig(app);
    // routes
    authRouter(app);
    exhibitionRouter(app);
    museumRouter(app);
    bookingRouter(app);
    filesRouter(app);
    likeRouter(app);
    app.listen(PORT, () => console.log(`Server running at: ${PORT}`));
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = start;