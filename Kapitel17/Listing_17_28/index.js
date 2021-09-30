'use strict';
const express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json())
app.get('/', (request, response) => {
  let json = request.body;
// hier normale Bearbeitung der Anfrage
});
app.listen(8080);