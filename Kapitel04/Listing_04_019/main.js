'use strict';
const item = Object.create(Object.prototype, {
  name: {
    value: 'Schrödinger programmiert Java',
    writable: false,
    configurable: true,
    enumerable: true
  },
  price: {
    value: 44.90,
    writable: true,
    configurable: true,
    enumerable: true
  },
  author: {
    value: 'Philip Ackermann',
    writable: false,
    configurable: true,
    enumerable: true
  },
  isbn: {
    value: '978-3-8362-7272-8',
    writable: false,
    configurable: true,
    enumerable: false // Die Eigenschaft "isbn" wird bei Iteration
// nicht ausgegeben.
  },
  printDescription: {
    value: function() {
      console.log(`${this.author}: ${this.name}`);
    }
  }
});
for(let property in item) {
  console.log(property); // Ausgabe: "name", "price", "author"
}
item.name = 'Cooles neues Java-Buch';
console.log(item.name);   // "Schrödinger programmiert Java", da die
                          // Eigenschaft "name" nicht "writeable" ist.
item.price = 54.95;
console.log(item.price);  // "54.95", da für die Eigenschaft "price"
                          // das Attribut "writable" den Wert "true" hat.