const fs = require("fs");
const path = require("path");
const qs = require("querystring");
const formidable = require("formidable");
const breeds = require("../data/breeds.json");
const cats = require("../data/cats.json");

module.exports = (req, res) => {
  const pathname = req.url;

  if (pathname === "/cats/add-cat" && req.method === "GET") {
    const filePath = path.normalize(path.join(__dirname, "..", "views", "addCat.html"));

    const readStream = fs.createReadStream(filePath, { encoding: "utf-8" });

    readStream.on("data", (chunk) => {
      console.log(chunk);
      res.write(chunk);
    });

    readStream.on("end", () => {
      res.end();
    });

    readStream.on("error", (err) => {
      console.log(err);
    })
  } else {
    return true;
  }
};
