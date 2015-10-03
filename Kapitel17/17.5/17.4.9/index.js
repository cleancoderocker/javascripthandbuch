var fs = require('fs');
fs.rmdir('test',function(error, files){
  if (error) {
    return console.error(error);
  }
});