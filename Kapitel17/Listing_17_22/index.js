'use strict';
const http = require('http');
let options = {
  host: 'localhost',
  port: '8080',
  path: '/index.html'
};
function handleResponse(response){
  let body = '';
  response.on('data', (data) => {
    body += data;
  });
  response.on('end', () => {
    console.log(body);
  });
}
let request = http.request(options, handleResponse);
request.end();