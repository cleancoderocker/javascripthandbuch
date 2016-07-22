'use strict';
class Item {
  constructor(name, price, author, isbn) {
    this.name = name;
    this.price = price;
    this.author = author;
    this.isbn = isbn;
  }
  printDescription() {
    console.log(this.author + ': ' + this.name);
  }
}
let item = new Item(
  'Schrödinger programmiert Java',
  44.90,
  'Philip Ackermann',
  '978-3836217408'
)
console.log(item.name);     // "Schrödinger programmiert Java"
console.log(item.price);    // 44.90
console.log(item.author);   // "Philip Ackermann"
console.log(item.isbn);     // "978-3836217408"
item.printDescription();    // "Philip Ackermann: Schrödinger programmiert Java"
let item2 = new Item(
  'Professionell entwickeln mit JavaScript: Design, Patterns, Praxistipps',
  34.90,
  'Philip Ackermann',
  '978-3836223799'
)
console.log(item2.name);    // "Professionell entwickeln mit JavaScript:
                            // Design, Patterns, Praxistipps"
console.log(item2.price);   // 34.90
console.log(item2.author);  // "Philip Ackermann"
console.log(item2.isbn);    // "978-3836223799"
item2.printDescription();   // "Professionell entwickeln mit JavaScript:
                            // Design, Patterns, Praxistipps"