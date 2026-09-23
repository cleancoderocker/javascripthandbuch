'use strict';
var http = require('http');
http.get("http://www.espruino.com", function(res) {
  res.on('data', function(data) {
    console.log(data);
  });
});