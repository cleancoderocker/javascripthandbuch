'use strict';
const express = require('express');
const app = express();
app.use('static', express.static('styles'));
app.use('static', express.static('scripts'));
app.use('static', express.static('images'));