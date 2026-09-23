'use strict';
const express = require('express');
const app = express();
app.get('/', (request, response) => {
  response.send('Hello World');
});
app.post('/something', (request, response) => {
  response.send('POST request processed');
});
app.put('/something', (request, response) => {
  response.send('PUT request processed');
});
app.delete('/something', (request, response) => {
  response.send('DELETE request processed');
});
const server = app.listen(8080, () => {
  const port = server.address().port;
  console.log("Server is running at: http://localhost:%s", port);
});
