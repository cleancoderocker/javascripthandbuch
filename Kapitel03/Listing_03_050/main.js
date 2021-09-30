'use strict';
const someNullValue = null;
const someUndefinedValue = undefined;
const someNumber = 0;
const someText = '';
const someBoolean = false;

// Linker Operand null --> Rückgabe des rechten Operanden
const a = someNullValue ?? 'Default value for null';
console.log(a);
// Ausgabe: Default value for null

// Linker Operand undefined --> Rückgabe des rechten Operanden
const b = someUndefinedValue ?? 'Default value for undefined';
console.log(b);
// Ausgabe: Default value for undefined

// Linker Operand 0 ("falsy") --> Rückgabe des linken Operanden
const c = someNumber ?? 80;
console.log(c);
// Ausgabe: 0

// Linker Operand leerer String ("falsy") --> Rückgabe des linken Operanden
const d = someText ?? 'Default value for empty string';
console.log(d);
// Ausgabe: ''

// Linker Operand false --> Rückgabe des linken Operanden
const e = someBoolean ?? true;
console.log(e);
// Ausgabe: false

const x = 4711;

console.log({} ?? x);                // {}
console.log(false ?? x);             // false
console.log(x ?? null);              // 4711
console.log(null ?? x);              // 4711
console.log(null ?? null);           // null
console.log(x ?? NaN);               // 4711
console.log(NaN ?? x);               // NaN
console.log(x ?? undefined);         // 4711
console.log(undefined ?? x);         // 4711
console.log(undefined ?? undefined); // undefined