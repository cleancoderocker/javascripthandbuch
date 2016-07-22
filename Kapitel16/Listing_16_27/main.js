'use strict';
let targetObject = {};
let handler = {
  set: function(targetObject, property, value) {
    console.log('setze ' + value + ' für Eigenschaft ' + property);
    targetObject[property] = value;
  },
  get: function(targetObject, property) {
    console.log('liefere ' + targetObject[property]
    + ' von Eigenschaft ' + property);
    return targetObject[property];
  }
}
let proxy = new Proxy(targetObject, handler);
proxy.firstName = 'Max';        // Aufruf set() von handler
proxy.lastName = 'Mustermann';  // Aufruf set() von handler
console.log(proxy.firstName);   // Aufruf get() von handler
console.log(proxy.lastName);    // Aufruf get() von handler