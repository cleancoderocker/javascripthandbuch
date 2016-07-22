'use strict';
let connection = new WebSocket('ws://example.com/test');
connection.onopen = function (e) {
  connection.send('Nachricht an Server');
};