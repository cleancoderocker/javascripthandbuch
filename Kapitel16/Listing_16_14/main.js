'use strict';
// Promise 1 wird "resolved"
const promise1 = new Promise((resolve, reject) => resolve('1'));
// Promise 2 wird "rejected"
const promise2 = new Promise((resolve, reject) => reject('2'));
// Promise 3 wird "resolved"
const promise3 = new Promise((resolve, reject) => resolve('3'));
Promise
  .all([promise1, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
// Ausgabe: [ '1', '3' ]
Promise
  .all([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
// Ausgabe: "Error: 2"