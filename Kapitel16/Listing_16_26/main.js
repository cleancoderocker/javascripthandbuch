'use strict';
let targetObject = {
  firstName: null,
  lastName: null
};
let handler = {/* wird gleich implementiert*/};
let proxy = Proxy(targetObject, handler);
proxy.firstName = 'Max';
proxy.lastName = 'Mustermann';
console.log(proxy.firstName);
console.log(proxy.lastName);