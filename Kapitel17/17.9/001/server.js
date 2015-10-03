var socketio = require('socket.io');      // socket.io-Modul einbinden
var socketServer = socketio();            // Socket-Server erstellen
socketServer.on('connection',             // Event-Handler für Verbinden
  function (socket) {                     //
    console.log('Client verbunden');      //
    socket.on('disconnect', function () { // Event-Handler für Trennen
      console.log('Client getrennt');
    });
  }
);
socketServer.listen(3000);                  // Socket-Server starten