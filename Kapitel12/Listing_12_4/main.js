'use strict';
let connection = new WebSocket('ws://example.com/test');
connection.onopen = function (e) {
  let message = {
  };
  connection.send(JSON.stringify(message));
};