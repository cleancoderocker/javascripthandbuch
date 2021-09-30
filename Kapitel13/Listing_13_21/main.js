'use strict';
class Animal {

  _name = 'Max Musterfisch';
  _color = 'Gold';
  _age = '25';

  constructor(name, color, age) {
    this._name = name ? name : this._name;
    this._color = color ? color : this._color;
    this._age = age ? age : this._age;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }

  eat(food) {
    console.log(`Mmpf mmpf, ${food}`);
  }

  drink(drink) {
    console.log(`Mmmmmmh, ${drink}`);
  }

  toString() {
    return `${this._name}, ${this._color}, ${this._age}`;
  }

}

class Dog extends Animal {

  _type;

  // Implizit wird folgender Konstruktor verwendet: 
  // constructor(...args) {
  //   super(...args);
  // }

  get type() {
    return this._type;
  }

  set type(type) {
    this._type = type;
  }

  bark() {
    console.log('Wuff wuff');
  }
}

const dog = new Dog('Bello', 'Weiß', 2, 'Malteser');
dog.eat('Käse');       // "Mmpf mmpf, Käse"
dog.bark();            // "Wuff wuff"
console.log(dog.type); // undefined