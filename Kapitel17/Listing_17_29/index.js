'use strict';
const express = require('express');
const cookieParser = require('cookie-parser');
let app = express();
app.use(cookieParser());
app.get('/', (request, response) => {
  let cookies = request.cookies;
// hier normale Bearbeitung der Anfrage
});
app.listen(8080);