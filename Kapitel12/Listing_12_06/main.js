'use strict';
const connection = new WebSocket('ws://example.com/test');
connection.onmessage = (event) => {
  try {
    const data = JSON.parse(event.data);
    console.log(data);
  } catch (error) {
    console.error('Fehler beim Parsen');
  }
};
