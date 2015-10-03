var path = require('path');                 // path-Modul einbinden
var express = require('express');           // express-Modul einbinden
var app = express();                        // express-Anwendung erstellen
var http = require('http');                 // http-Modul einbinden
var server = http.Server(app);              // Server erstellen
var socketio = require('socket.io');        // socket.io-Modul einbinden
var socketServer = socketio(server);        // Socket-Server erstellen

app.get('/', function (req, res) {          // Route erstellen und ...
  res.sendFile(path.join(                   // ... HTML senden.
      __dirname, 'index.html')
  );
});

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
    socket.on('message',                    // Chat-Nachricht abfangen ...
      function (message) {                  // ... und per Broadcast ...
        socketServer.emit(                  // ... verschicken.
          'message',
          message
        );        // ... und an alle
      }
    );
    socket.on('disconnect', function () {   // Event-Handler für Trennen
      console.log('Client getrennt');
    });
  }
);
server.listen(3000, function () {           // HTTP-Server starten
  console.log('Server gestartet');
});