'use strict';
const numbers = [ 18, 22, 26, 30, 34 ];
numbers.name = "number array"; // Arrays are objects and can be ...
                               // ... extended by properties.
// for-in loop
for (let i in numbers) {
   console.log(i); // 0, 1, 2, 3, 4, name
}
// for-of loop
for (let i of numbers) {
   console.log(i); // 18, 22, 26, 30, 34
}
