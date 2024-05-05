const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const qs = require("querystring");
const formidable = require("formidable");
const breeds = require("../data/breeds.json");
const cats = require("../data/cats.json");

module.exports = async (req, res) => {
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
    });
  } else if (pathname === "/cats/add-breed" && req.method === "GET") {
    const filePath = path.normalize(path.join(__dirname, "..", "views", "addBreed.html"));

    try {
      const data = await fsPromises.readFile(filePath, "utf-8");
      console.log(data);
      res.write(data);
      res.end();
    } catch (err) {
      console.error(err);
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  } else {
    return true;
  }
};
