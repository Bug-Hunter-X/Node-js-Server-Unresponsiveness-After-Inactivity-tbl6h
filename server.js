const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');

//Uncommon error: Server unresponsive after a period of inactivity
// The server might stop responding to requests after being idle for some time, especially if there's a memory leak or resource exhaustion in the application.

//This is because if no requests are being handled, Node.js might enter a low-resource state or encounter issues that prevent it from serving future requests. This can be more pronounced in environments with limited resources like shared hosting. 