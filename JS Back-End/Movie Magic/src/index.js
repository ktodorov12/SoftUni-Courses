const express = require("express");
const { home } = require("./controllers/catalog");
const { hbsConfig } = require("./config/hbs");
const { expressConfig } = require("./config/express");

const app = express();
const port = process.env.PORT || 5000;

hbsConfig(app);
expressConfig(app);

app.get("/", home);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
