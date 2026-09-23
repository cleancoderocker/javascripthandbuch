'use strict';
class Food {
 
  _description
 
  constructor(description) {
    this._description = description ? description : this._description;
  }
 
  get description() {
    return this._description;
  }
 
  set description(description) {
    this._description = description;
  }
 
  toString() {
    return this.description;
  }
 
}
class Meat extends Food {}
 
class Bread extends Food {}

const bread = new Bread('wheat bread');
console.log(bread.description);      // "wheat bread"
const meat = new Meat('steak');
console.log(meat.description);       // "steak"

class VegetarianDog extends Dog {
 
  eat(food) {
    if (food instanceof Meat) {
      throw new Error('I don`t eat meat!');
    } else {
      super.eat(food);
    }
  }
 
}
 
const dog = new VegetarianDog('Bello', 'White', 2, 'Maltese');
dog.eat(new Bread('wheat bread')); // "Chow, Chow, wheat bread!"
dog.eat(new Meat('steak'));        // Error: "I don't eat meat!"
