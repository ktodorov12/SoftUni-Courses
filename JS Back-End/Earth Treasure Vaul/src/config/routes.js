const { catalogRouter } = require("../controllers/catalog");
const { userRouter } = require("../controllers/user");
const { detailsRouter } = require("../controllers/details");
const { stoneRouter } = require("../controllers/stones");
const { notFound } = require("../controllers/notFound");


function routeConfig(app) {
  app.use(catalogRouter);
  app.use(userRouter);
  app.use(detailsRouter);
  app.use(stoneRouter);

  app.get("*", notFound);
}

module.exports = routeConfig;
