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

const bread = new Bread('Weizenbrot');
console.log(bread.description); // "Weizenbrot"
const meat = new Meat('Steak');
console.log(meat.description);  // "Steak"


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
      throw new Error('Ich esse doch kein Fleisch!');
    } else {
      super.eat(food);
    }
  }

}

const dog = new VegetarianDog('Bello', 'Weiß', 2, 'Malteser');
dog.eat(new Bread('Weizenbrot')); // "Mmpf, mmpf, Weizenbrot!"
dog.eat(new Meat('Steak'));       // Fehler: "Ich esse doch kein Fleisch!"