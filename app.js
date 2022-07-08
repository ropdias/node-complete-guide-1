const http = require("http");
const fs = require("fs");

// A request listener is a function that will be executed for every incoming request
const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");

    // Here you send the response back to the client
    // "return" is not required to return a response, we are just adding to skip the rest of the code
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY");

    res.statusCode = 302;
    res.setHeader("Location", "/");
    // You can also write the two above lines in one step like this:
    // res.writeHead(302, { Location: "/" });

    return res.end();
  }

  // Good article about headers: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
  res.setHeader("Content-Type", "text/html");

  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server !</h1></body>");
  res.write("</html>");
  res.end(); // Here you send the response back to the client
  // You should not write anymore in the response after you send with .end();

  // process.exit(); // You can use this command to stop the server if you want
});

server.listen(3000);
