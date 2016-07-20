'use strict';
class Food {
  constructor(description) {
    this.description = description;
  }
  get description() {
    return this._description;
  }
  set description(description) {
    this._description = description;
  }
  toString() {
    return this.description;
  }
}
class Meat extends Food {
  constructor(description) {
    super(description);
  }
}
class Bread extends Food {
  constructor(description) {
    super(description);
  }
}
let bread = new Bread('Weizenbrot');
console.log(bread.description); // "Weizenbrot"
let meat = new Meat('Steak');
console.log(meat.description);  // "Steak"


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
  constructor(name, color, age, type) {
    super(name, color, age);
    this.type = type;
  }
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

class VegetarianDog extends Dog {
  constructor(name, color, age, type) {
    super(name, color, age, type);
  }
  eat(food) {
    if(food instanceof Meat) {
      throw new Error('Ich esse doch kein Fleisch!');
    } else {
      super.eat(food);
    }
  }
}
let dog = new VegetarianDog('Bello', 'Weiß', 2, 'Malteser');
dog.eat(new Bread('Weizenbrot')); // "Mmpf, mmpf, Weizenbrot!"
dog.eat(new Meat('Steak')); // Fehler: "Ich esse doch kein Fleisch!"