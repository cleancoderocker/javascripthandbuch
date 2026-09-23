'use strict';
const item = Object.create(Object.prototype, {
  name: {
    value: 'JavaScript: The Comprehensive Guide',
    writable: false,
    configurable: true,
    enumerable: true
  },
  price: {
    value: 59.95,
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
    value: '978-1-4932-2286-5',
    writable: false,
    configurable: true,
    enumerable: false     // During iteration, the "isbn" property is 
                          // not output.

  },
  printDescription: {
    value: function() {
      console.log(`${this.author}: ${this.name}`);
    }
  }
});
for(let property in item) {
  console.log(property);    // Output: "name", "price", "author"
}

item.name = 'Cool new Java book';
console.log(item.name);     // "JavaScript: The Comprehensive Guide", because the 
                            // "name" property is not "writeable".

item.price = 54.95;
console.log(item.price);    // "54.95", because for the "price" property,
                            // the "writable" attribute has a value of "true".
