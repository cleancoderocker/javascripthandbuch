class Animal {
 
  _name = 'John Sample Fish';
  _color = 'Gold';
  _age = '25';
 
  constructor(name, color, age) {
    this._name = name ? name : this._name;
    this._color = color ? color : this._color;
    this._age = age ? age : this._age;
  }
 
  // Setter and getter methods as usual
 
  eat(food) {
    console.log(`Chow chow, ${food}`);
  }
 
  drink(drink) {
    console.log(`Mmmmmmh, ${drink}`);
  }
 
  toString() {
    return `${this._name}, ${this._color}, ${this._age}`;
  }
 
}
 
const snake = new Animal('Hissy', 'Green', 5);
console.log(snake.name);  // "Hissy"
console.log(snake.color); // "Green"
console.log(snake.age);   // 5
 
snake._name = 4711;
snake._color = 'hello world';
snake._age = 'twenty';
 
console.log(snake.name);  // 4711
console.log(snake.color); // "hello world"
console.log(snake.age);   // "twenty"
