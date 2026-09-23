'use strict';
function randomNumber() {
  return new Promise(resolve => {
    setTimeout(() => {
      const x = Math.floor(Math.random() * 100) + 1;
      resolve(x);
    }, 2000);
  });
}

async function addTwoRandomNumbers() {
  console.log('Calculation of first random number');
  const a = await randomNumber();
  console.log(`Result: ${a}`);
  console.log('Calculation of second random number');
  const b = await randomNumber();
  console.log(`Result: ${b}`);
  return a + b;
}

(async () => {
  const result = await addTwoRandomNumbers();
  console.log(`Summe: ${result}`);
})();

// Sample output:
// Calculation of first random number
// Result: 38
// Calculation of second random number
// Result: 58
// Total: 96
