const http = require("http");
const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, true);
  const path = parsedUrl.pathname;

  if (req.method === "GET" && path === "/") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Welcome to the Node.js HTTP Server");
  } else if (req.method === "GET" && path === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end("<h1>About Page</h1><p>This is a simple Node.js HTTP server.</p>");
  } else if (req.method === "GET" && path === "/user") {
    const { name, age } = parsedUrl.query;
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ name, age }));
  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain",
    });
    res.end("404 Page Not Found");
  }
});
server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});