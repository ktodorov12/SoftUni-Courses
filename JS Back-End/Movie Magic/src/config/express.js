const { urlencoded, static: staticHandler } = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");

function expressConfig(app) {
  app.use(urlencoded({ extended: true }));
  app.use("/static", staticHandler("static"));
  app.use(cookieParser());
  app.use(
    session({
      secret: "keyborad cat",
      resave: false,
      saveUninitialized: true,
    })
  );
}

module.exports = { expressConfig };
