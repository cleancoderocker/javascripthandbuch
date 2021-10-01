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
  // Setter- und Getter-Methoden wie gehabt
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
const snake = new Animal('Zischi', 'Grün', 5);
console.log(snake.name); // "Zischi"
console.log(snake.color); // "Grün"
console.log(snake.age); // 5
snake._name = 4711;
snake._color = 'hello world';
snake._age = 'zwanzig';
console.log(snake.name); // 4711
console.log(snake.color); // "hello world"
console.log(snake.age); // "zwanzig"