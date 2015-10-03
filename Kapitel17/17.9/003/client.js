var socketio = require('socket.io-client'); // socket.io-client-Modul einbinden
var client = socketio.connect(              // Verbindung herstellen
  'http://localhost:3000'
);
client.on('welcome', function (message) {   // Nachricht abfangen
  console.log(
    'Nachricht vom Server: ' + message
  );
  client.emit('welcome', 'Hallo Server');   // Nachricht senden
});
