const http = require("http");
const port = 5000;
const handlers = require("./handlers");

const server = http.createServer((req, res) => {
  let handled = false;
  
  for (let handler of handlers) {
    if (!handler(req, res)) {
      handled = true;
      break;
    }
  }

  if (!handled) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(port);
console.log("Server is listening on port 5000");
