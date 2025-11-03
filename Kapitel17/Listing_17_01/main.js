'use strict';
import { createServer } from 'http';
createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
response.write('Hallo Welt');
response.end();
}).listen(8000);