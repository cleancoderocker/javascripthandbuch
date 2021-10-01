'use strict';
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('1'), 5000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('2'), 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('1'), 5000);
});
Promise
  .race([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
// Ausgabe: 1