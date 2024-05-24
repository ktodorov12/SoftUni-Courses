const express = require("express");
const hbs = require("express-handlebars");

const app = express();
const port = 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));
