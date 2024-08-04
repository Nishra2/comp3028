import http from 'http';

// Define the port to listen on
const PORT = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content-Type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body "Hello, World!"
  res.end('Hello, World!\n');
});

// Listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
