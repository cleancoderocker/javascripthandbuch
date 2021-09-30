'use strict';
const http = require('http');
const PORT = 8080;
function handleRequest(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hallo Welt');
}
const server = http.createServer(handleRequest);
server.listen(PORT, () => {
  console.log("Server läuft unter: http://localhost:%s", PORT);
});