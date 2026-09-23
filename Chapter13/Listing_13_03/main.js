'use strict';
const animal = {
  name: 'default',
  color: 'Brown',
  age: 0,
  eat: function(food) {
    console.log('Chow chow, ' + food + '!');
  },
  drink: function(drink) {
    console.log('Mmmmmmh, ' + drink + '!');
  }
}
const cat = Object.create(animal);
cat.meow = function() {
  console.log('Meowwwww!');
}
cat.eat('cat food');              // Output: 'Chow, chow, cat food!'
cat.drink('Milk');                // Output: 'Mmmmmmh, milk!'
cat.meow();                       // Output: 'Meowwwww!'
console.log(cat.color);           // Output: 'Brown'
const dog = Object.create(animal);
dog.bark = function() {
  console.log('Woof woof!');
}
dog.eat('meat');                  // Output: 'Chow, chow, meat!' 
dog.drink('water');               // Output: 'Mmmmmmh, water!'
dog.bark();                       // Output: 'Woof woof!'
console.log(dog.color);           // Output: 'Brown'
