function init() {
  class Animal {
    constructor(name, color, age) {
      this.name = name;
      this.color = color;
      this.age = age;
    }
    eat(food) {
      console.log('Mmpf mmpf, ' + food + '!');
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
  let snake = new Animal('Zischi', 'Grün', 5);
  console.log(snake.name);  // "Zischi"
  console.log(snake.color); // "Grün"
  console.log(snake.age);   // 5
}

document.addEventListener('DOMContentLoaded', init);