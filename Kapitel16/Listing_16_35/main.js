const person = {
  firstName: 'Max',
  lastName: 'Mustermann',
  email: 'maxmustermann@javascripthandbuch.de',
  age: 42
}

const handler = {
  get(target, property) {
      console.log(`Lese "${target[property]}" von Eigenschaft "${property}"`);
      return target[property];
  },

  set(target, property, value) {
    console.log(`Schreibe "${target[property]}" in Eigenschaft "${property}"`);
    target[property] = value;
  }
}

const proxy = new Proxy(person, handler);
proxy.firstName = 'Max';        // Aufruf set() von handler
// Ausgabe: 
// Schreibe Wert "Max" in Eigenschaft "firstName"

proxy.lastName = 'Mustermann';  // Aufruf set() von handler
// Ausgabe:
// Schreibe Wert "Mustermann" in Eigenschaft "lastName"

console.log(proxy.firstName);   // Aufruf get() von handler
// Ausgabe:
// Lese Wert "Max" von Eigenschaft "firstName"
// Max

console.log(proxy.lastName);    // Aufruf get() von handler
// Ausgabe:
// Lese Wert "Mustermann" von Eigenschaft "lastName"
// Mustermann

console.log(proxy.age);    // Aufruf get() von handler
// Ausgabe:
// Lese Wert "42" von Eigenschaft "age"
// 42