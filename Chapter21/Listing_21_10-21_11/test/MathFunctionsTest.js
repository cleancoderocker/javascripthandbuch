'use strict';
const MathFunctions = require('../src/MathFunctions')
const assert = require('assert');
describe('MathFunctions', () => {
  describe('#compare()', () => {
    // 1. Test case
    it('should return 0, if both numbers are equal.', () => {
      const number1 = 7;
      const number2 = 5;
      const result = MathFunctions.compare(number1, number2);
      assert.equal(
        result,                // actual result
        1,                     // expected result
        '7 is greater than 5'  // additional message
      );
    });
    // 2. Test case
    it('should return -1, if the first number is smaller.', () => {
      const number1 = 5;
      const number2 = 7;
      const result = MathFunctions.compare(number1, number2);
      assert.equal(
        result,                // actual result
        -1,                    // expected result
        '5 is smaller than 7'  // additional message
      );
    });
    // 3. Test case
    it('should return 0, if both numbers are equal.', () =>{
      const number1 = 5;
      const number2 = 5;
      const result = MathFunctions.compare(number1, number2);
      assert.equal(
        result,                // actual result
        0,                     // expected result
        '5 is equal to 5'      // additional message
      );
    });
    // 4. Test case
    it('should throw an error if no numbers were passed.', () => {
      const number1 = '5';
      const number2 = '5';
      assert.throws(
        () => {
          MathFunctions.compare(number1, number2)
        },
        TypeError              // the expected error type
      );
    });
  });
});
