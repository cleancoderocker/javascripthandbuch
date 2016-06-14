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
      if(color === 'Lila') {
        throw new Error('Tiere können nicht lila sein.');
      }
      this._color = color;
    }
    get age() {
      return this._age;
    }
    set age(age) {
      this._age = age;
    }
  }
  let snake = new Animal('Zischi', 'Lila', 5); // Fehler
}

document.addEventListener('DOMContentLoaded', init);