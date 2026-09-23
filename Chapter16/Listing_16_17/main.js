'use strict';
const promise1 = new Promise((resolve, reject) => resolve('1'));
const promise2 = new Promise((resolve, reject) => reject('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));
 
Promise
  .any([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
 
// Output: 1
 
Promise
  .any([promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
 
// Output: "Error: AggregateError: All promises were rejected"
