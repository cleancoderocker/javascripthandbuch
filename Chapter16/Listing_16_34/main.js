'use strict';
const targetObject = {
  firstName: null, 
  lastName: null
};
const handler = {/* is about to be implemented */};
const proxy = new Proxy(targetObject, handler);
proxy.firstName = 'John';
proxy.lastName = 'Doe';
console.log(proxy.firstName);
console.log(proxy.lastName);
