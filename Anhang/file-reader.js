var fs = require('fs');
var lineReader = require('line-reader');

var counter = 0;
var result = '';
var internalCounter = 0;
var type = null;
var name = null;
var description = null;
lineReader.eachLine('input.txt', function (line, last) {
  line = line.trim();
  if (line !== '') {
    if (line.indexOf('Properties') === 0 || line.indexOf('Operations') === 0) {

    } else if (line.indexOf('_HTML') === 0) {
      result = '\n' + line.substring(1) + '\n';
      fs.appendFileSync('output.txt', result);
    } else {
      if(line.indexOf('\t') >= 0) {
        fs.appendFileSync('output.txt', line.split('\t')[1] + '\t' + line.split('\t')[0] + '\n');
      } else {
        internalCounter++;
        switch (internalCounter) {
          case 1:
            type = line;
            break;
          case 2:
            name = line;
            break;
          case 3:
            if(line.indexOf('.') < 0) {
              console.log(line);
              internalCounter = 0;
              result += name + '\t' + type + '\n';
              // console.log(result);
              fs.appendFileSync('output.txt', result);
              result = '';
              internalCounter = 1;
              name = null;
              description = null;
            } else {
              description = line;
              internalCounter = 0;
              result += name + '\t' + type + '\t' + description + '\n';
              // console.log(result);
              fs.appendFileSync('output.txt', result);
              result = '';
              type = null;
              name = null;
              description = null;
            }
            break;
        }
      }
      // console.log(result);
    }
  }
  counter++;
});