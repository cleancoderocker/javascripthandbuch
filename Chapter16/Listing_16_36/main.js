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
    if (property === 'age') {
      if (typeof value !== 'number') {
          throw new Error('Age must be a number');
      }
      if (value < 0) {
          throw new Error('Age must not be less than 0')
      }
    }
    console.log(`Write "${target[property]}" to property "${property}"`);
    target[property] = value;
  }
}
 
const proxy = new Proxy(person, handler);
proxy.age = -42; // Error: Age must not be less than 0.
