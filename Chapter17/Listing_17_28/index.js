'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())
app.get('/', (request, response) => {
  const json = request.body;
  // here normal processing of the request
});
app.listen(8080);
