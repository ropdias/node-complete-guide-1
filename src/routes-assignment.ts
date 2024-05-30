import { IncomingMessage, ServerResponse } from 'http';

export const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body>');
    res.write('<h1>Greetings !</h1>');
    res.write("<form action='/create-user' method='POST'>");
    res.write("<label for='username'>Username:</label>");
    res.write("<input type='text' name='username' id='username'>");
    res.write("<button type='submit'>Send</button>");
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>User 1</li>');
    res.write('<li>User 2</li>');
    res.write('<li>User 3</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body: Buffer[] = [];
    req.on('data', (chunk: Buffer) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString(); // We know that is a string in this case
      console.log(parsedBody.split('=')[1]);
      res.statusCode = 302;
      res.setHeader('Location', '/users');
      res.end();
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Assignment 1</title></head>');
  res.write('<body>');
  res.write('<h1>Page not found !</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
};
