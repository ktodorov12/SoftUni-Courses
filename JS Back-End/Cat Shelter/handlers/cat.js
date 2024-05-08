const fs = require("fs");
const fsPromises = require("fs/promises");
const { Transform } = require("stream");
const path = require("path");
const qs = require("querystring");
const formidable = require("formidable");
const breeds = require("../data/breeds.json");
const cats = require("../data/cats.json");
const breedTemplate = require("../views/templates/breedsTemplate");
const { IncomingMessage } = require("http");

module.exports = async (req, res) => {
  const pathname = req.url;

  if (pathname === "/cats/add-cat" && req.method === "GET") {
    const catBreedPlaceholder = breeds.map(breedTemplate);
    const filePath = path.normalize(path.join(__dirname, "..", "views", "addCat.html"));

    const readStream = fs.createReadStream(filePath, { encoding: "utf-8" });
    const transformStream = new Transform({
      transform(chunk, encoding, callback) {
        const modifiedChunk = chunk.toString().replace("{{catBreeds}}", catBreedPlaceholder);
        this.push(modifiedChunk);
        callback();
      },
    });
    readStream.pipe(transformStream).pipe(res);

    readStream.on("error", (err) => {
      console.error(err);
      throw new Error(err?.message);
    });
  } else if (pathname === "/cats/add-cat" && req.method === "POST") {

    try {
      const form = new formidable.IncomingForm();
      const [fields, files] = await form.parse(req);

      const catData = {
        name: fields.name[0],
        description: fields.description[0],
        breed: fields.breed[0]
      }

      form.on("fileBegin", (string, file) => {
        console.log(string, file);
      })

      console.log(files);
    } catch (error) {
      console.error(error);
      throw new Error(error?.message);
    }

    res.writeHead(301, {location: "/"});
    res.end();
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
