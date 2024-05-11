const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const qs = require("querystring");
const formTemplate = require("../views/templates/newHomeTemp.js");

module.exports = async (req, res) => {
  const [pathname, catId] = req.url.split("?");
  const filePath = path.join(__dirname, "../views", "catShelter.html");
  const catsPath = path.join(__dirname, "../data", "cats.json");

  if (pathname === "/cats-find-new-home" && req.method === "GET") {
    try {
      const { foundCat } = await findNeededCat();

      const formView = formTemplate(foundCat);
      const shelterView = await fsPromises.readFile(filePath, { encoding: "utf-8" });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(shelterView.toString().replace("{{catForm}}", formView));
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 Internal Server Error");
      console.error(err); // Log the error for debugging purposes
      return;
    }

    res.end();
  } else if (pathname === "/cats-find-new-home" && req.method === "POST") {
    try {
      const { allCatData, foundCat } = await findNeededCat();

      const index = allCatData.indexOf(foundCat);
      allCatData.splice(index, 1);
      await fsPromises.writeFile(catsPath, JSON.stringify(allCatData, null, 2));

      res.writeHead(301, { location: "/" });
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 Internal Server Error");
      console.error(err); // Log the error for debugging purposes
      return;
    }

    res.end();
  } else {
    return true;
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
};
