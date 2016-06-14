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
  }
  let fish = new Animal('Fischi', 'Grün', 2);
  fish.eat('Algen');
}

document.addEventListener('DOMContentLoaded', init);