var express = require('express');
var serveStatic = require('serve-static');

var app = express();
app.use(serveStatic(__dirname + '/public/'));

var port = process.env.PORT || 5000;
app.listen(port);
