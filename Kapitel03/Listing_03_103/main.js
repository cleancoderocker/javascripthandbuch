'use strict';
const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
outerLoop:
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    innerLoop:
      for (let j = i + 1; j < numbers.length; j++) {
        const number2 = numbers[j];
        console.log(`Vergleiche ${number} mit ${number2}`);
        if (number === number2) {
          console.log('Gleiche Zahlen gefunden');
          continue outerLoop;
        }
      }
  }