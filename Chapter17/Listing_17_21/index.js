'use strict';
const http = require('http');
const url = require('url');
const fs = require('fs');
// 1.) Create server
http.createServer((request, response) => {  
   // 2.) Find path
   const pathname = url.parse(request.url).pathname;
   // 3.) Read file for path
   fs.readFile(pathname.substr(1), (error, data) => {
      if (error) {
         return console.error(error);
         // 3.1.) File not found
         // HTTP status: 404 : NOT FOUND
         // Content-Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/plain'});
      } else {
         // 3.2.) File found
         // HTTP status: 200 : OK
         // Content-Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});
         response.write(data.toString());
      }
      // 4.) Send response
      response.end();
   });
}).listen(8080);
