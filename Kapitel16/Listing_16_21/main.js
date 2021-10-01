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
  console.log('Berechnung erste Zufallszahl');
  const a = await randomNumber();
  console.log(`Ergebnis: ${a}`);
  console.log('Berechnung zweite Zufallszahl');
  const b = await randomNumber();
  console.log(`Ergebnis: ${b}`);
  return a + b;
}
  
addTwoRandomNumbers()
  .then(result => console.log(`Summe: ${result}`));
  