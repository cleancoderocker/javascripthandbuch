var fs = require('fs');
fs.writeFile('output.txt', 'Hallo Welt',  function(error) {
  if (error) {
    return console.error(error);
  }
  fs.readFile('output.txt', function (error, data) {
    if (error) {
      return console.error(error);
    }
    console.log('Inhalt: ' + data.toString());
  });
});