'use strict';
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
app.get('/', (request, response) => {
  const cookies = request.cookies;
  // here normal processing of the request
});
app.listen(8080);
