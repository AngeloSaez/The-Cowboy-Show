// constant variables
const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');

// view engine setup
app.set('view engine', 'jade');
// remove layouts
app.set('view options', { layout: false });
// express setup
app.use(express.json());
// static file upload
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
// routing setup
app.use('/', indexRouter);

// export
module.exports = app;
