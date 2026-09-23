'use strict';
const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
console.log('Before the loop.');
let i = 0;                                    // Initialize counter variable.
while(i < numbers.length) {                   // Iterate over number array.
  const number = numbers[i];                  // Assign respective number.
  i++;                                        // Increment counter variable.
  if (number % 2 === 1) {                     // If a number is odd ...
    console.log('Odd number found.');         // ... output message ...
    continue;                                 // ... and terminate the loop
                                              // iteration.
  }                                           // Otherwise ...
  console.log(number);                        // ... output the number.
}
