const { catalogRouter } = require("../controllers/catalog");
const { userRouter } = require("../controllers/user");
const { notFound } = require("../controllers/notFound");
const { detailsRouter } = require("../controllers/details");
const { recipesRouter } = require("../controllers/recipes");

function routeConfig(app) {
  app.use(catalogRouter);
  app.use(userRouter);
  app.use(recipesRouter);
  app.use(detailsRouter);

  app.get("*", notFound);
}

module.exports = routeConfig;
