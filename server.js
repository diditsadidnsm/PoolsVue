var express = require('express');
var serveStatic = require('serve-static');

var app = express();
app.use(serveStatic(__dirname + 'http://188.166.181.108:5000/'));

var port = process.env.PORT || 5000;
app.listen(port);
