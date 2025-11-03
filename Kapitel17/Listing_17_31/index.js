'use strict';
import express from 'express';
const app = express();
app.use(express.static('styles'));
app.use(express.static('scripts'));
app.use(express.static('images'));