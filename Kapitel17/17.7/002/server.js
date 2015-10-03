var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hallo Welt');
});

var server = app.listen(8080, function () {
  var port = server.address().port;
  console.log("Server läuft unter: http://localhost:%s", port);
});