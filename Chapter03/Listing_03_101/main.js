'use strict';
const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  for (let j = i + 1; j < numbers.length; j++) {
    const number2 = numbers[j];
    console.log(`Compare ${number} with ${number2}`);
    if (number === number2) {
      console.log('Same numbers found');
      continue;
    }
  }
}
