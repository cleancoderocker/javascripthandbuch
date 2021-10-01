'use strict';
const item = new Item(
  'Schrödinger programmiert Java',
  44.90,
  'Philip Ackermann',
  '978-3-8362-7272-8'
)
console.log(item.name);     // "Schrödinger programmiert Java"
console.log(item.price);    // 44.90
console.log(item.author);   // "Philip Ackermann"
console.log(item.isbn);     // "978-3-8362-7272-8"
item.printDescription();    // "Philip Ackermann: Schrödinger programmiert Java"
const item2 = new Item(
  'Professionell entwickeln mit JavaScript: Design, Patterns, Praxistipps',
  49.90,
  'Philip Ackermann',
  '978-3-8362-5687-2'
)
console.log(item2.name);    // "Professionell entwickeln mit JavaScript:
                            // Design, Patterns, Praxistipps"
console.log(item2.price);   // 49.90
console.log(item2.author);  // "Philip Ackermann"
console.log(item2.isbn);    // "978-3-8362-5687-2"
item2.printDescription();   // "Professionell entwickeln mit JavaScript:
                            // Design, Patterns, Praxistipps"