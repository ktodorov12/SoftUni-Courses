const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const qs = require("querystring");
const formTemplate = require("../views/templates/newHomeTemp.js");

module.exports = async (req, res) => {
  const [pathname, catId] = req.url.split("?");
  const filePath = path.join(__dirname, "../views", "catShelter.html");
  const catsPath = path.join(__dirname, "../data", "cats.json");

  try {
    if (pathname === "/cats-find-new-home" && req.method === "GET") {
      const { foundCat } = await findNeededCat();

      const formView = formTemplate(foundCat);
      const shelterView = await fsPromises.readFile(filePath, { encoding: "utf-8" });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(shelterView.toString().replace("{{catForm}}", formView));

      res.end();
    } else if (pathname === "/cats-find-new-home" && req.method === "POST") {
      const { allCatData, foundCat } = await findNeededCat();

      const index = allCatData.indexOf(foundCat);
      allCatData.splice(index, 1);
      await fsPromises.writeFile(catsPath, JSON.stringify(allCatData, null, 2));

      res.writeHead(301, { location: "/" });

      res.end();
    } else {
      return true;
    }
  } catch (err) {
    handleError(err);
  }
  
  async function findNeededCat() {
    try {
      const allCatData = JSON.parse(await fsPromises.readFile(catsPath, { encoding: "utf-8" }));
      const foundCat = allCatData.find((cat) => cat.id == catId);

      if (!foundCat) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Cat not found");
        return;
      }

      return { allCatData, foundCat };
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 Internal Server Error");
      console.error(err); // Log the error for debugging purposes
      return;
    }
  }

  function handleError(err, res) {
    console.log(err);
    let statusCode = 500;
    let errorMessage = "Internal Server Error";

    if (err instanceof SyntaxError || err.code === "ENOENT") {
      statusCode = 404;
      errorMessage = "Resource not found";
    } else if (err instanceof TypeError) {
      statusCode = 400;
      errorMessage = "Bad request";
    }

    res.writeHead(statusCode, { "Content-Type": "text/plain" });
    res.end(errorMessage);
  }
};
