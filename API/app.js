var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config({path: __dirname + '/.env'});

var indexRouter = require('./routes/index');
var campaignRouter = require('./routes/campaign');
var DB = require('./services/db').default;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/campaign', campaignRouter);

app.listen(3001);

module.exports = app;
