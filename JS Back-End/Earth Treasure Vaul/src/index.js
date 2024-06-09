const express = require("express");
const expressConfig = require("./config/express");
const dbConfig = require("./config/db");
const hbsConfig = require("./config/hbs");
const router = require("./config/routes");

const app = express();
const port = 3000;

start();
async function start() {
  try {
    await dbConfig();

    expressConfig(app);
    hbsConfig(app);
    app.use(router);
    app.listen(port, () => console.log("Server is listening on port " + port));
  } catch (error) {
    console.log(error);
  }
}
