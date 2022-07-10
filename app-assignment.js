const http = require("http");

const routes = require("./routes-assignment");

const server = http.createServer(routes.handler);

server.listen(3000);
