//Create an Express.js app with a home page (/home) rendered by jade template engine,
//that shows current date (toDateString).
'use strict';

var express = require('express');
var app = express();
var port = process.argv[2];
var views = process.argv[3];

app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');
app.set('views', views);

app.get('/home', function(req, res){
    res.render('index.jade', {date: new Date().toDateString()});
});

app.listen(port);