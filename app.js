// constant variables
const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');

// express setup
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'portfolio')));

// routing setup
app.use('/', indexRouter);

// export
module.exports = app;