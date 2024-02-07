function solve(input) {
  const methods = ["GET", "POST", "DELETE", "CONNECT"];
  const uriPtrn = /^[\w.]+$/g;
  const versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const messagePtrn = ["<", ">", "\\", "'", '"', "&"];

  if (!methods.includes(input.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }
  if (!uriPtrn.test(input.uri) || !input.uri || !input.uri === "*") {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (!versions.includes(input.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }

  if (!input.hasOwnProperty("message")) {
    throw new Error("Invalid request header: Invalid Message");
  }

  for (let el of input.message) {
    if (messagePtrn.includes(el)) {
      throw new Error("Invalid request header: Invalid Message");
    }
  }

  return input;
}

solve({
  method: "GET",
  version: "HTTP/1.1",
  uri: "asd.asd",
});
