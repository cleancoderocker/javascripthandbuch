'use strict';
const http = require('http');
http.createServer((request, response) => {
  if(request.url === '/') {
    response.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
    response.end('Hello World');
  } else if(request.url === '/about') {
    response.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
    response.end('About us');
  } else if(request.url === '/contact') {
    response.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
    response.end('Contact information');
  } else {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('Requested URL not found');
  }

}).listen(8080);
