'use strict';
class Food {

  _description

  constructor(description) {
    this._description = description ? description : this._description;
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
class Meat extends Food {}

class Bread extends Food {}

const bread = new Bread('Weizenbrot');
console.log(bread.description); // "Weizenbrot"
const meat = new Meat('Steak');
console.log(meat.description);  // "Steak"

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

  constructor(name, color, age, type) {
    super(name, color, age);
    this._type = type ? type : this._type;
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

  eat(food) {
    if (food instanceof Meat) {
      throw new Error('Ich esse doch kein Fleisch!');
    } else {
      console.log(`Mmpf mmpf, ${food.description}!`);
    }
  }

}

const dog = new VegetarianDog('Bello', 'Weiß', 2, 'Malteser');
dog.eat(new Bread('Weizenbrot')); // "Mmpf, mmpf, Weizenbrot!"
dog.eat(new Meat('Steak'));       // Fehler: "Ich esse doch kein Fleisch!"