var socketio = require('socket.io');        // socket.io-Modul einbinden
var socketServer = socketio();              // Socket-Server erstellen
socketServer.on('connection',               // Event-Handler für Verbinden
  function (socket) {                       //
    console.log('Client verbunden');        //
    socket.emit('welcome', 'Hallo Client'); // Nachricht an den Client
    socket.on('welcome',                    // Nachricht vom Client abfangen
      function (message) {
        console.log(
          'Nachricht vom Client: '
          + message
        );
      }
    );
    socket.on('disconnect', function () {   // Event-Handler für Trennen
      console.log('Client getrennt');
    });
  }
);
socketServer.listen(3000);                  // Socket-Server starten