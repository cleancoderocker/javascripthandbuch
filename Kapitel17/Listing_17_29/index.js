'use strict';
import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
app.use(cookieParser());
app.get('/', (request, response) => {
  const cookies = request.cookies;
// hier normale Bearbeitung der Anfrage
});
app.listen(8080);