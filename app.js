const http = require("http");

// A request listener is a function that will be executed for every incoming request
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit();

  // Good article about headers: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
  res.setHeader("Content-Type", "text/html");

  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server !</h1></body>");
  res.write("</html>");
  res.end(); // Here you send the response back to the client
  // You should not write anymore in the response after you send with .end();
});

server.listen(3000);
