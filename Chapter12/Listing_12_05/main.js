'use strict';
const connection = new WebSocket('ws://example.com/test');
connection.onmessage = (event) => {
  console.log(event.data.byteLength);
};