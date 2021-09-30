'use strict';
const express = require('express');
const app = express();
app.get('/', (request, response) => {
  response.send('Hallo Welt');
});
app.post('/something', (request, response) => {
  response.send('POST-Anfrage bearbeitet');
});
app.put('/something', (request, response) => {
  response.send('PUT-Anfrage bearbeitet');
});
app.delete('/something', (request, response) => {
  response.send('DELETE-Anfrage bearbeitet');
});
const server = app.listen(8080, () => {
  const port = server.address().port;
  console.log("Server läuft unter: http://localhost:%s", port);
});