'use strict';
const promise1 = new Promise((resolve, reject) => resolve('1'));
const promise2 = new Promise((resolve, reject) => reject('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));
 
Promise
  .allSettled([promise1, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
 
// Output:
// [
//   { status: 'fulfilled', value: '1' },
//   { status: 'fulfilled', value: '3' }
// ]
 
Promise
  .allSettled([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
 
// Output:
// [
//   { status: 'fulfilled', value: '1' },
//   { status: 'rejected', reason: '2' },
//   { status: 'fulfilled', value: '3' }
// ]
