const express = require("express");
const { hbsConfig } = require("./config/hbs");
const { expressConfig } = require("./config/express");
const router = require("./config/routes");
const dbConfig = require("./config/db");

const app = express();
const port = process.env.PORT || 5000;

startApp();
async function startApp() {
  try {
    await dbConfig();
    hbsConfig(app);
    expressConfig(app);
    app.use(router);

    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
}
