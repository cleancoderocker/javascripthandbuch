'use strict';
function compareNumbers(numberAtI, numberAtJ) {
  if(numberAtI === numberAtJ) {
    console.log('Doppelte Zahl gefunden: ' + numberAtI);
  }
}
function checkNumber(numberAtI, numbers, i) {
  for(let j=i+1; j<numbers.length; j++) {
    let numberAtJ = numbers[j];
    compareNumbers(numberAtI, numberAtJ);
  }
}
function findDuplicates() {
  let numbers = [2, 4, 5, 2, 5, 8, 5, 4711];
  for(let i=0; i<numbers.length; i++) {
    checkNumber(numbers[i], numbers, i);
  }
}
document.addEventListener('DOMContentLoaded', findDuplicates);
