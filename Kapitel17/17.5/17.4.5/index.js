var fs = require('fs');
fs.stat('input.txt', function (error, stats) {
  if (error) {
    return console.error(error);
  }
  console.log(stats.isFile());        // true
  console.log(stats.isDirectory());   // false
  console.log(stats);                 // siehe nächstes Listing
});