var fs = require('fs');
fs.readdir('test',function(error, files){
  if (error) {
    return console.error(error);
  }
  files.forEach( function (file){
    console.log( file );
  });
});