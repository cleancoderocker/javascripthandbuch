'use strict';
QUnit.test('MathFunctions.compare() should return 1, if the first number is greater.', (assert) => {
  const number1 = 7;
  const number2 = 5;
  const result = MathFunctions.compare(number1, number2);
  assert.equal(
    result,                // Actual result
    1,                     // Expected result
    '7 is greater than 5'  // Additional message
  );
});
QUnit.test('MathFunctions.compare() should return -1, if the first number is smaller.', (assert) => {
  const number1 = 5;
  const number2 = 7;
  const result = MathFunctions.compare(number1, number2);
  assert.equal(
    result,                // Actual result
    -1,                    // Expected result
    '5 is smaller than 7'  // Additional message
  );
});
QUnit.test('MathFunctions.compare() should return 0, if both numbers are equal.', (assert) => {
  const number1 = 5;
  const number2 = 5;
  const result = MathFunctions.compare(number1, number2);
  assert.equal(
    result,           // Actual result
    0,                // Expected result
    '5 equals 5'      // Additional message
  );
});
QUnit.test('MathFunctions.compare() should throw an error, if no numbers are passed.', (assert) => {
  const number1 = "5";
  const number2 = "5";
  assert.throws(
    () => {
      MathFunctions.compare(number1, number2)
    },
    new TypeError('Only numbers are allowed.'),
    'Strings are not accepted.'
  );
});