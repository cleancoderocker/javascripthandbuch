'use strict';
let MathFunctions = require('../src/MathFunctions')
let assert = require('assert');
describe('MathFunctions', function() {
  describe('#compare()', function(){
    it('soll 0 zurückgeben, wenn beide Zahlen gleich sind.', function(){
      let number1 = 7;
      let number2 = 5;
      let result = MathFunctions.compare(number1, number2);
      assert.equal(
        result,               // Tatsächliches Ergebnis
        1,                    // Erwartetes Ergebnis
        '7 ist größer als 5'  // Zusätzliche Meldung
      );
    });
    it('soll -1 zurückgeben, wenn die erste Zahl kleiner ist.', function(){
      let number1 = 5;
      let number2 = 7;
      let result = MathFunctions.compare(number1, number2);
      assert.equal(
        result,               // Tatsächliches Ergebnis
        -1,                   // Erwartetes Ergebnis
        '5 ist kleiner als 7' // Zusätzliche Meldung
      );
    });
    it('soll 0 zurückgeben, wenn beide Zahlen gleich sind.', function(){
      let number1 = 5;
      let number2 = 5;
      let result = MathFunctions.compare(number1, number2);
      assert.equal(
        result,               // Tatsächliches Ergebnis
        0,                    // Erwartetes Ergebnis
        '5 ist gleich 5'      // Zusätzliche Meldung
      );
    });
    it('soll einen Fehler werfen, wenn keine Zahlen übergeben wurden.', function(){
      let number1 = '5';
      let number2 = '5';
      assert.throws(
        () => {
          MathFunctions.compare(number1, number2)
        },
        TypeError
      );
    });
  });
});