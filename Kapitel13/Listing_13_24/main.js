'use strict';
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
// snake.#eat('Vogel'); // SyntaxError
// snake.#drink('Wasser'); // SyntaxError

class Dog extends Animal {

  #type;

  constructor(name, color, age, type) {
    // Fehler, da kein Aufruf des Elternkonstruktors
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

const dog = new Dog('Bello', 'Weiß', 2, 'Malteser'); // Fehler!
dog.eat('Käse'); 
dog.bark();
console.log(dog.type);
