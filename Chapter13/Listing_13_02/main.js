const animal = {
  name: '',
  color: 'Brown',
  age: 0,
  eat: function(food) {
    console.log(`Mmpf mmpf, ${food}!`);
  },
  drink: function(drink) {
    console.log(`Mmmmmmh, ${drink}!`);
  }
}
const cat = Object.create(animal);  // Objects inherit ...
cat.eat('cat food');          // ... methods ...
cat.drink('milk');
console.log(cat.color);           // ... and properties from the prototype.
const dog = Object.create(animal);
dog.eat('meat');               // Output: 'Mmpf mmpf, meat!' 
dog.drink('water');              // Output: 'Mmmmmmh, water!'
console.log(dog.color);           // Output: 'brown'
