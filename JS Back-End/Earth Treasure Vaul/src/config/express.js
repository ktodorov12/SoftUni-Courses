const { urlencoded, static } = require("express");
const cookieParser = require("cookie-parser");
const session = require("../middlewares/session");

function expressConfig(app) {
  app.use(cookieParser());
  app.use(session());
  app.use(urlencoded({ extended: true }));
  app.use("/static", static("static"));
}

module.exports = expressConfig;
