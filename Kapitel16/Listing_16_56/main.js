'use strict';
const FORMAT_LP = Symbol('Musik auf LP');
const FORMAT_EP = Symbol('Musik auf EP');
const FORMAT_CD = Symbol('Musik auf CD');
const FORMAT_FILE = Symbol('Musik als Datei');
function setFormat(format) {
  switch(format) {
    case FORMAT_FILE:
      console.log('Buuuuh');
      break;
    case FORMAT_CD:
      console.log('Schon besser.');
      break;
    case FORMAT_EP:
    case FORMAT_LP:
      console.log('Viel besser!!!!!');
      break;
  }
}
setFormat(FORMAT_FILE); // "Buuuuh"
setFormat(FORMAT_CD);   // "Schon besser."
setFormat(FORMAT_EP);   // "Viel besser!!!!!"
setFormat(FORMAT_LP);   // "Viel besser!!!!!"