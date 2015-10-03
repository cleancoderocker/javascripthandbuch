var fs = require('fs');
fs.writeFile('output.txt', 'Hallo Welt',  function(error) {
  if (error) {
    return console.error(error);
  }
  console.log('Datei erstellt');
  fs.unlink('output.txt', function(error) {
    if (error) {
      return console.error(error);
    }
    console.log('Datei wieder gelöscht');
  });
});