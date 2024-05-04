const fs = require("fs");
const path = require("path");

function getContentType(url) {
  if (path.extname(url) === ".css") {
    return "text/css";
  } else if (path.extname(url) === ".html") {
    return "text/html";
  } else if (path.extname(url) === ".js") {
    return "application/javascript";
  } else if (path.extname(url) === ".jpg") {
    return "image/jpeg";
  } else if (path.extname(url) === ".png") {
    return "image/png";
  } else if (path.extname(url) === ".img") {
    return "image/*";
  } else if (path.extname(url) === ".ico") {
    return "image/vnd.microsoft.icon";
  } else {
    return "text/plain";
  }
}

module.exports = (req, res) => {
  const pathname = req.url;

  if (pathname.startsWith("/content") && req.method === "GET") {
    const filePath = path.normalize(path.join(__dirname, "..", pathname));

    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 not found");
        return;
      }

      const contentType = getContentType(pathname);

      res.writeHead("200", {
        "Content-Tpye": contentType,
      });
      res.write(data);
      res.end();
    });
  } else {
    return true;
  }
};
