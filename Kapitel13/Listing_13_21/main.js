'use strict';
class Animal {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }
  eat(food) {
    console.log('Mmpf mmpf, ' + food);
  }
  drink(drink) {
    console.log('Mmmmmmh, ' + drink);
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
}
class Dog extends Animal {
// Implizit wird folgender Konstruktor verwendet:
// constructor(... args) {
// super(...args);
// }
  bark() {
    console.log('Wuff wuff');
  }
}