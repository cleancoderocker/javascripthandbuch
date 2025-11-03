'use strict';
import http from 'http';
const options = {
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
const request = http.request(options, handleResponse);
request.end();