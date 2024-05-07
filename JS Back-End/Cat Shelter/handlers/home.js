const fs = require("fs");
const path = require("path");
const cats = require("../data/cats.json");
const template = require("../views/templates/catsTemplate");

module.exports = (req, res) => {
  const pathname = req.url;

  if (pathname === "/" && req.method === "GET") {
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
  } else {
    return true;
  }
};
