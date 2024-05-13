const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const qs = require("querystring");
const formidable = require("formidable");
const deleteFormTemplate = require("../views/templates/newHomeTemp.js");
const editFormTempalte = require("../views/templates/editCatTemp.js");

module.exports = async (req, res) => {
  const pathname = req.url;
  const catId = pathname.substring(pathname.lastIndexOf("/") + 1);
  const catShelpterPath = path.join(__dirname, "../views", "catShelter.html");
  const editCatPath = path.join(__dirname, "../views", "editCat.html");
  const catsPath = path.join(__dirname, "../data", "cats.json");

  try {
    if (pathname === `/cats-find-new-home/${catId}` && req.method === "GET") {
      const { foundCat } = await findNeededCat();

      const formView = deleteFormTemplate(foundCat);
      const shelterView = await fsPromises.readFile(catShelpterPath, { encoding: "utf-8" });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(shelterView.toString().replace("{{catForm}}", formView));
      res.end();
    } else if (pathname === `/cats-find-new-home/${catId}` && req.method === "POST") {
      const { allCatData, foundCat } = await findNeededCat();

      await fsPromises.unlink(path.join(__dirname, "..", foundCat.imageUrl));
      const index = allCatData.indexOf(foundCat);
      allCatData.splice(index, 1);
      await fsPromises.writeFile(catsPath, JSON.stringify(allCatData, null, 2));

      res.writeHead(302, { location: "/" });
      res.end();
    } else if (pathname === `/edit-cat/${catId}` && req.method === "GET") {
      const { foundCat } = await findNeededCat();

      const formView = editFormTempalte(foundCat);
      const editPage = await fsPromises.readFile(editCatPath, { encoding: "utf-8" });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(editPage.toString().replace("{{editCat}}", formView));
      res.end();
    } else if (req.url === `/edit-cat/${catId}` && req.method === "POST") {
      const { allCatData, foundCat } = await findNeededCat();

      const form = new formidable.IncomingForm();
      const [fields, files] = await form.parse(req);

      allCatData.splice(allCatData.indexOf(foundCat), 1);
      const catPhoto = files.image[0];
      const urlPath = `/content/images/${catPhoto.originalFilename}`;
      const editedCatData = {
        name: fields.name[0],
        description: fields.description[0],
        group: fields.group[0],
        imageUrl: urlPath,
      };
      allCatData.push(editedCatData);

      await fsPromises.writeFile(path.join(__dirname, "..", urlPath), await fsPromises.readFile(catPhoto.filepath));
      await fsPromises.writeFile(catsPath, JSON.stringify(allCatData, null, 2));

      res.writeHead(302, { location: "/" });
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

  function handleError(err) {
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
