'use strict';
let connection = new WebSocket('ws://example.com/test');
connection.onmessage = function(e) {
  console.log(e.data.byteLength);
};