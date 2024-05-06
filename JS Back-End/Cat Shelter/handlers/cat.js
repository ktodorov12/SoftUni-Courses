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
    readStream.pipe(res);

    readStream.on("error", (err) => {
      console.error(err);
      throw new Error(err?.message);
    });
  } else if (pathname === "/cats/add-breed" && req.method === "GET") {
    const filePath = path.normalize(path.join(__dirname, "..", "views", "addBreed.html"));

    try {
      const data = await fsPromises.readFile(filePath, "utf-8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    } catch (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  } else if (pathname === "/cats/add-breed" && req.method === "POST") {
    const filePath = path.normalize(path.join(__dirname, "..", "data", "breeds.json"));
    let data = "";

    req.on("data", (chunk) => {
      data += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const breedsData = JSON.parse(await fsPromises.readFile(filePath, "utf-8"));
        const formData = qs.parse(data);
  
        const newBreed = formData.breed.toString();
        breedsData.push(newBreed);
        const updatedBreeds = JSON.stringify(breedsData, null, 2);
  
        await fsPromises.writeFile(filePath, updatedBreeds);
      } catch (error) {
        console.log(err);
        throw new Error(err?.message);
      }
    });

    req.on("error", (err) => {
      console.log(err);
      throw new Error(err?.message);
    });

    res.writeHead(301, { location: "/" });
    res.end();
  } else {
    return true;
  }
};
