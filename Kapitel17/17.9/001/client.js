var socketio = require('socket.io-client'); // socket.io-client-Modul einbinden
var client = socketio.connect(              // Verbindung herstellen
  'http://localhost:3000'
);
