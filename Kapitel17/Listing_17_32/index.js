'use strict';
const express = require('express');
let app = express();
app.use('static', express.static('styles'));
app.use('static', express.static('scripts'));
app.use('static', express.static('images'));