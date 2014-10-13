//Create an Express.js app that runs on localhost:3000, and outputs "Hello World!" when somebody goes to '/home'.
//The port number will be provided to you by expressworks as the first argument of the application, ie. process.argv[2].
'use strict';

var express = require('express');
var app = express();
var port = process.argv[2];

app.get('/home', function(req, res){
    res.send('Hello World!');
});

app.listen(port);