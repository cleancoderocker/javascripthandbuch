'use strict';
const targetObject = {
  firstName: null,
  lastName: null
};
const handler = {/* wird gleich implementiert*/};
const proxy = Proxy(targetObject, handler);
proxy.firstName = 'Max';
proxy.lastName = 'Mustermann';
console.log(proxy.firstName);
console.log(proxy.lastName);