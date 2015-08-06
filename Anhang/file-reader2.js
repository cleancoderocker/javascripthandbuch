var jf = require('jsonfile')
var util = require('util')

var file = 'HTML5.json'
jf.readFile(file, function(err, obj) {
  console.log(err);
  console.log(util.inspect(obj))
})