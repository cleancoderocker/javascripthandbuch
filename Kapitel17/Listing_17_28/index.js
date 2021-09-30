'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())
app.get('/', (request, response) => {
  const json = request.body;
// hier normale Bearbeitung der Anfrage
});
app.listen(8080);