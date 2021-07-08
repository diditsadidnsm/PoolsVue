var express = require('express');
var serveStatic = require('serve-static');

var app = express();
const path = __dirname + '/dist/';
app.use(express.static(path));

var port = process.env.PORT || 5000;
app.listen(port);
