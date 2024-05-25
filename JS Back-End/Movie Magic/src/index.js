const express = require("express");
const { home } = require("./controllers/catalog");
const { hbsConfig } = require("./config/hbs");

const app = express();
const port = process.env.PORT || 5000;

hbsConfig(app);
app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static("static"));

app.get("/", home);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
