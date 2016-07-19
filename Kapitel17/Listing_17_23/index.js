'use strict';
const http = require('http');
http.createServer((request, response) => {
  if(request.url === '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('Hallo Welt');
  } else if(request.url === '/about') {
    response.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
    response.end('Über Uns');
  } else if(request.url === '/contact') {
    response.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
    response.end('Kontaktinformationen');
  } else {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('Angeforderte URL nicht gefunden');
  }
  }).listen(8080);