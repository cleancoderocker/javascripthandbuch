'use strict';
let connection = new WebSocket('ws://example.com/test');
connection.onopen = function (e) {
  console.log('Verbindung geöffnet');
};
connection.onerror = function (error) {
  console.log('WebSocket Error ' + error);
};
connection.onclose = function (e) {
  console.log('Verbindung geschlossen');
};