const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const qs = require("querystring");
const formTemplate = require("../views/templates/newHomeTemp.js");

module.exports = async (req, res) => {
  const [pathname, catId] = req.url.split("?");

  if (pathname === "/cats-find-new-home" && req.method === "GET") {
    const filePath = path.join(__dirname, "../views", "catShelter.html");
    const catsPath = path.join(__dirname, "../data", "cats.json");

    try {
      const allCatData = JSON.parse(await fsPromises.readFile(catsPath, { encoding: "utf-8" }));
      const addoptedCat = allCatData.find((cat) => cat.id == catId);

      if (!addoptedCat) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Cat not found");
        return;
      }

      const formView = formTemplate(addoptedCat);
      const shelterView = await fsPromises.readFile(filePath, { encoding: "utf-8" });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(shelterView.toString().replace("{{catForm}}", formView));
      res.end();
    } catch (err) {
      res.end(err);
      throw new Error(err);
    }
  } else {
    return true;
  }
};
