'use strict';
const express = require('express');
let app = express();
app.use(express.static('styles'));
app.use(express.static('scripts'));
app.use(express.static('images'));