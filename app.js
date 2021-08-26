// constant variables
const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// express setup
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// routing setup
app.use('/', indexRouter);

// export
module.exports = app;
