'use strict';
function sum(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  console.log(result);
}
sum([2,3,4,5]);               // Ausgabe: 14
sum([2,3,4,5,6,7,8,9]);       // Ausgabe: 44
sum([2,3,4,5,6,7,8,9,10,11]); // Ausgabe: 65