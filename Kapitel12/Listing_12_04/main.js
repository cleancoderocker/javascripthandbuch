'use strict';
const connection = new WebSocket('ws://example.com/test');
connection.onopen = (event) => {
  const message = {
    hello: 'world'
  };
  connection.send(JSON.stringify(message));
};