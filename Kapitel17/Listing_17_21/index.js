'use strict';
const http = require('http');
const url = require('url');
const fs = require('fs');
// 1.) Server erstellen
http.createServer((request, response) => {
// 2.) Pfad herausfinden
  const pathname = url.parse(request.url).pathname;
// 3.) Datei für Pfad lesen
fs.readFile(pathname.substr(1), (error, data) => {
  if (error) {
  return console.error(error);
// 3.1.) Datei wurde nicht gefunden
// HTTP Status: 404 : NOT FOUND
// Content-Type: text/plain
  response.writeHead(404, {'Content-Type': 'text/plain'});
} else {
// 3.2.) Datei gefunden
// HTTP Status: 200 : OK
// Content-Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(data.toString());
}
// 4.) Antwort senden
response.end();
});
}).listen(8080);