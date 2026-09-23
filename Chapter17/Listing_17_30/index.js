'use strict';
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const app = express();
const accessLogStream = fs.createWriteStream(
  __dirname + '/access.log', 
  {
    Flags: 'a'}
  )
app.use(morgan('combined', {stream: accessLogStream}))
app.get('/', (request, response) => {
  // here normal processing of the request
});
