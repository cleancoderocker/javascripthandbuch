'use strict';
const AnimalClass = class Animal {
  
  name = 'John Sample Fish';
  color = 'Gold';
  _age = 25;
  
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
    console.log(`Chow chow, ${food}`);
  }
  
  drink(drink) {
    console.log(`Mmmmmmh, ${drink}`);
  }
  
  toString() {
    return `${this.name}, ${this.color}, ${this.age}`;
  }
  
}
  
const snake = new Animal('Zischi', 'green', 5);
console.log(snake.name);  // "Zischi"
console.log(snake.color); // "green"
console.log(snake.age);   // 5
