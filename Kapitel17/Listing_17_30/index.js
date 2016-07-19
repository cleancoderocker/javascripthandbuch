'use strict';
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
let app = express();
let accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}))
app.get('/', (request, response) => {
// hier normale Bearbeitung der Anfrage
});