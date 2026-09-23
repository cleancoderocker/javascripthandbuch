'use strict';
const connection = new WebSocket('ws://example.com/test');
connection.onopen = (event) => {
  connection.send('Message to server');
};
