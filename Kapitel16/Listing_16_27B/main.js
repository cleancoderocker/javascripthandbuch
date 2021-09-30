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
    if (property === 'age') {
      if (typeof value !== 'number') {
          throw new Error('Alter muss eine Zahl sein.');
      }
      if (value < 0) {
          throw new Error('Alter darf nicht kleiner 0 sein.')
      }
    }
    console.log(`Schreibe "${target[property]}" in Eigenschaft "${property}"`);
    target[property] = value;
  }
}

const proxy = new Proxy(person, handler);
proxy.age = -42;