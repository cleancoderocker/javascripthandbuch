'use strict';
let connection = new WebSocket('ws://example.com/test');
connection.onopen = (event) => {
  let message = {
    hello: 'world'
  };
  connection.send(JSON.stringify(message));
};