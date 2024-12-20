const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

//Solution: Implementing Keep-Alive and Monitoring
//To address the unresponsiveness, ensure the server handles keep-alive connections properly (default is usually on). 
//Add monitoring using tools such as PM2 to restart the server if it fails.  Also, periodically check for memory leaks in the application using tools like heapdump.

//Further enhancements for production environments might include:
//1. Using a process manager like PM2 to monitor and restart the server automatically.
//2. Implementing robust logging to track potential errors and resource usage.
//3. Employing a load balancer to distribute requests across multiple server instances. 

 server.listen(8080);
console.log('Server is running on port 8080');