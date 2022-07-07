const http = require("http");

// A request listener is a function that will be executed for every incoming request
const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
