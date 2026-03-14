const http = require('http');
const fs = require('fs'); // This "fs" module lets Node read files

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Read our new index.html file
  fs.readFile('index.html', (err, data) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // Changed from text/plain to text/html
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Bubbleverse running at http://${hostname}:${port}/`);
});
