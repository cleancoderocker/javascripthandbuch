'use strict';
const someNullValue = null;
const someUndefinedValue = undefined;
const someNumber = 0;
const someText = '';
const someBoolean = false;

// Left operand is null --> return right operand
const a = someNullValue ?? 'Default value for null';
console.log(a);
// Output: Default value for null

// Left operand is undefined --> return right operand
const b = someUndefinedValue ?? 'Default value for undefined';
console.log(b);
// Output: Default value for undefined

// Left operand is 0 ("falsy") --> return left operand
const c = someNumber ?? 80;
console.log(c);
// Output: 0

// Left operand is an empty string ("falsy") --> return left operand
const d = someText ?? 'Default value for empty string';
console.log(d);
// Output: ''

// Left operand is false --> return left operand
const e = someBoolean ?? true;
console.log(e);
// Output: false

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
