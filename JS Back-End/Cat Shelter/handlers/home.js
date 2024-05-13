const fs = require("fs");
const path = require("path");
const cats = require("../data/cats.json");
const template = require("../views/templates/catsTemplate");
const qs = require("querystring");

module.exports = (req, res) => {
  const [pathname, queryParam] = req.url.split("?");

  if (pathname === "/" && req.method === "GET" && !queryParam) {
    const filePath = path.normalize(path.join(__dirname, "../views", "home", "index.html"));

    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404, {
          "Content-Type": "text/html",
        });

        res.write("404. Page not found!");
        res.end();
        return;
      }

      const catPlaceholder = cats.map(template);
      const modifiedData = data.toString().replace("{{allCatsData}}", catPlaceholder);

      res.writeHead(200, {
        "Content-Type": "text/html",
      });

      res.write(modifiedData);
      res.end();
    });
  } else if (pathname === "/" && req.method === "POST") {
    let data = "";

    req
      .on("data", (chunk) => {
        data += chunk.toString();
      })
      .on("end", () => {
        const parsed = qs.parse(data);
        if (!parsed.name) {
          res.writeHead(302, { location: "/" });
          return res.end();
        }

        res.writeHead(302, { location: `/?${data}` });
        res.end();
      });
  } else if (req.url === `/?${queryParam}` && req.method === "GET") {
    let allCatData = "";

    const readStream = fs.createReadStream(path.join(__dirname, "../data/cats.json"));
    readStream
      .on("data", (chunk) => {
        allCatData += chunk.toString();
      })
      .on("end", () => {
        allCatData = JSON.parse(allCatData);
        console.log("All Cat Data:", allCatData);

        const query = qs.parse(queryParam);
        const searchName = query.name;

        const foundCats = allCatData.filter((cat) => {
          const caseInsensitive = cat.name.toLowerCase();
          return caseInsensitive.includes(searchName);
        });
        console.log("Found Cats:", foundCats);

        const catsPlaceholder = foundCats.map(template);
        const homePage = fs.readFileSync(path.join(__dirname, "../views/home/index.html"));
        res.writeHead(200, { "content-type": "text/html" });
        res.write(homePage.toString().replace("{{allCatsData}}", catsPlaceholder));
        res.end();
      });
  } else {
    return true;
  }
};
