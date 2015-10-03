var fs = require('fs');                           // fs-Modul einbinden
var stream = fs.createWriteStream('output.txt');  // Schreibender Stream
stream.write(                                     // Daten schreiben
  'Hallo Welt',                                   // Daten
  function() {                                    // Callback-Handler ...
    console.log('Daten geschrieben');             // ... wenn fertig.
  }
);