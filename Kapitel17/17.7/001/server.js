var http = require('http');
const PORT = 8080;
function handleRequest(request, response){
  response.end('Hallo Welt');
}
var server = http.createServer(handleRequest);
server.listen(PORT, function(){
  console.log("Server läuft unter: http://localhost:%s", PORT);
});