var fs = require('fs');
fs.mkdir('test',function(error){
  if (error) {
    return console.error(error);
  }
  console.log('Verzeichnis erstellt');
});