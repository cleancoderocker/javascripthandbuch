'use strict';
let connection = new WebSocket('ws://example.com/test');
connection.onopen = (event) {
  connection.close();
};