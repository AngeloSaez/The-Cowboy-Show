// constant variables
const express = require('express');
const app = express();
const path = require('path');

// router setup
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// express setup
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

// export
module.exports = app;
