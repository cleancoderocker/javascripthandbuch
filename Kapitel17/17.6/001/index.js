var fs = require('fs');                         // fs-Modul einbinden
var stream = fs.createReadStream('input.txt');  // Lesender Stream
var data = '';
stream.on('data', function(chunk) {             // Event-Handler für ...
  data += chunk;                                // ... data-Event.
});
stream.on('end', function() {                   // Event-Handler für ...
  console.log(data);                            // .. end-Event.
});