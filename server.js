var express = require('express');
var serveStatic = require('serve-static');

var path = require("path");
var app = express();
app.use(serveStatic("./ : ", path.resolve("./")));

var port = process.env.PORT || 5000;
app.listen(port);
