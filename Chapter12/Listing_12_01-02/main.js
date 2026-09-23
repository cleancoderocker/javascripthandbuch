'use strict';
const connection = new WebSocket('ws://example.com/test');
connection.onopen = (event) => {
  console.log('Connection opened');
};
connection.onerror = (error) => {
  console.log(`WebSocket Error: ${error}`);
};
connection.onclose = (event) => {
  console.log('Connection closed');
};
