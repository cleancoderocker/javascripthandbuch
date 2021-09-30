'use strict';
QUnit.test('MathFunctions.compare() soll 1 zurückgeben, wenn die erste Zahl größer ist.', (assert) => {
  const number1 = 7;
  const number2 = 5;
  const result = MathFunctions.compare(number1, number2);
  assert.equal(
    result,               // Tatsächliches Ergebnis
    1,                    // Erwartetes Ergebnis
    '7 ist größer als 5'  // Zusätzliche Meldung
  );
});
QUnit.test('MathFunctions.compare() soll -1 zurückgeben, wenn die erste Zahl kleiner ist.', (assert) => {
  const number1 = 5;
  const number2 = 7;
  const result = MathFunctions.compare(number1, number2);
  assert.equal(
    result,               // Tatsächliches Ergebnis
    -1,                   // Erwartetes Ergebnis
    '5 ist kleiner als 7' // Zusätzliche Meldung
  );
});
QUnit.test('MathFunctions.compare() soll 0 zurückgeben, wenn beide Zahlen gleich sind.', (assert) => {
  const number1 = 5;
  const number2 = 5;
  const result = MathFunctions.compare(number1, number2);
  assert.equal(
    result,               // Tatsächliches Ergebnis
    0,                    // Erwartetes Ergebnis
    '5 ist gleich 5'      // Zusätzliche Meldung
  );
});
QUnit.test('MathFunctions.compare() soll einen Fehler werfen, wenn keine Zahlen übergeben wurden.', (assert) => {
  const number1 = "5";
  const number2 = "5";
  assert.throws(
    () => {
      MathFunctions.compare(number1, number2)
    },
    new TypeError('Nur Zahlen erlaubt.'),
    'Zeichenketten werden nicht akzeptiert.'
  );
});