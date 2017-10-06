'use strict';
let connection = new WebSocket('ws://example.com/test');
connection.onmessage = function(e) {
  let data = JSON.parse(e.data);
};