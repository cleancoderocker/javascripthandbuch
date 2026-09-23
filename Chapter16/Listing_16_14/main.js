'use strict';
// Promise 1 is "resolved"
const promise1 = new Promise((resolve, reject) => resolve('1'));
// Promise 2 is "rejected"
const promise2 = new Promise((resolve, reject) => reject('2'));
// Promise 3 is "resolved"
const promise3 = new Promise((resolve, reject) => resolve('3'));
 
Promise
  .all([promise1, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
 
// Output: [ '1', '3' ]
 
Promise
  .all([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
 
// Output: "Error: 2"
