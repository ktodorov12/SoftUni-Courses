const http = require("http");
const homeTempalte = require("./views/home.html");
const addCatTempalte = require("./views/addCat.html");
const siteCss = require("./views/site.css");

const cats = [
  {
    id: 1,
    name: "Tommy",
    imageUrl: "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
    breed: "Bombay Cat",
    description: "Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.",
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.write(homeTempalte(cats));
  } else if (req.url == "/styles/site.css") {
    res.writeHead(200, {
      "content-type": "text/css",
    });

    res.write(siteCss);
  } else if (req.url == "/cats/add-cat") {
    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.write(addCatTempalte);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });

    res.write("<h1>404</h1>");
  }

  res.end();
});

server.listen(5000);
console.log("Server is listening on port 5000");
