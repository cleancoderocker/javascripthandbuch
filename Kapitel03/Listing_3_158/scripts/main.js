'use strict';
function findDuplicates() {
  let numbers = [2, 4, 5, 2, 5, 8, 5, 4711];
  for(let i=0; i<numbers.length; i++) {
    let numberAtI = numbers[i];
    for(let j=i+1; j<numbers.length; j++) {
      let numberAtJ = numbers[j];
      if(numberAtI === numberAtJ) {
        console.log('Doppelte Zahl gefunden: ' + numberAtI);
      }
    }
  }
}
document.addEventListener('DOMContentLoaded', findDuplicates);
