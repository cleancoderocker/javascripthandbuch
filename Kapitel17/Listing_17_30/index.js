'use strict';
import express from 'express';
import fs from 'fs';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}))
app.get('/', (request, response) => {
// hier normale Bearbeitung der Anfrage
});