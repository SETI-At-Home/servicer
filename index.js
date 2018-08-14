/*
*  Primary file for the API
*
*/

// Dependicies
var http = require('http');

// The server should respond to all req with a string
var server = http.createServer(function (req, res) {
  res.end('Hello from server\n');
});

// Start the server and listen on port 3000
server.listen(3000, function () {
  console.log('The server is listening on port 3000');
});