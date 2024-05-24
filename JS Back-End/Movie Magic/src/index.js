const express = require("express");
const handlebars = require("express-handlebars");

const app = express();
const port = process.env.PORT || 5000;

const hbs = handlebars.create({ extname: ".hbs" });

app.use(express.urlencoded({ extended: true }));
app.set("view engine", ".hbs");
app.use(".hbs", hbs.engine);

app.use("/static", express.static("public"));

app.listen(port, () => console.log(`Server is listening on port ${port}`));
