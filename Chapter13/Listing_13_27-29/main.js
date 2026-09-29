'use strict';
class Food {
 
  #description
 
  constructor(description) {
    this.#description = description ? description : this.#description;
  }
 
  get description() {
    return this.#description;
  }
 
  set description(description) {
    this.#description = description;
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
 
class Animal {
  #name = 'Max Musterfisch';
  #color = 'Gold';
  #age = 25;
  constructor(name, color, age) {
    this.#name = name ? name : this._name;
    this.#color = color ? color : this._color;
    this.#age = age ? age : this._age;
  }
 
  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
  get color() {
    return this.#color;
  }
  set color(color) {
    this.#color = color;
  }
  get age() {
    return this.#age;
  }
  set age(age) {
    this.#age = age;
  }
  eat(food) {
    console.log(`Mmpf mmpf, ${food}`);
  }
  drink(drink) {
    console.log(`Mmmmmmh, ${drink}`);
  }
  toString() {
    return `${this.#name}, ${this.#color}, ${this.#age}`;
  }
}
const snake = new Animal('Zischi', 'Grün', 5);
// snake.#eat('bird'); // SyntaxError
// snake.#drink('water'); // SyntaxError
 
 
class Dog extends Animal {
 
  #type;
 
  constructor(name, color, age, type) {
    super(name, color, age);
    this.#type = type ? type : this.#type;
  }
 
  get type() {
    return this.#type;
  }
 
  set type(type) {
    this.#type = type;
  }
 
  bark() {
    console.log('Wuff wuff');
  }
}
 
class VegetarianDog extends Dog {
 
  eat(food) {
    if (food instanceof Meat) {
      throw new Error('I do not eat meat!');
    } else {
      console.log(`Mmpf mmpf, ${food.description}!`);
    }
  }
 
}
 
const dog = new VegetarianDog('Bello', 'white', 2, 'Malteser');
dog.eat(new Bread('Weizenbrot')); // "Mmpf, mmpf, Weizenbrot!"
dog.eat(new Meat('Steak'));       // Error: "I do not eat meat!"
