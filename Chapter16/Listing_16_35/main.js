const person = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@javascripthandbuch.de',
  age: 42
}
 
const handler = {
  get(target, property) {
      console.log(`Read "${target[property]}" from property "${property}"`);
      return target[property];
  },
 
  set(target, property, value) {
    console.log(`Write "${target[property]}" to property "${property}"`);
    target[property] = value;
  }
}
 
const proxy = new Proxy(person, handler);
proxy.firstName = 'John';        // Call set() of handler
// Output: 
// Write value "John" to property "firstName"
 
proxy.lastName = 'Doe';          // Call set() of handler
// Output:
// Write value "Doe" to property "lastName"
 
console.log(proxy.firstName);    // Call get() of handler
// Output:
// Read value "John" from property "firstName"
// John
 
console.log(proxy.lastName);     // call get() of handler
// Output:
// Read value "Doe" from property "lastName"
// Doe

console.log(proxy.age);          // call get() of handler
// Output:
// Read value "42" from property "age"
// 42
