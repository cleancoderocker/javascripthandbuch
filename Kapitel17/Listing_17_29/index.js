'use strict';
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
app.get('/', (request, response) => {
  const cookies = request.cookies;
// hier normale Bearbeitung der Anfrage
});
app.listen(8080);