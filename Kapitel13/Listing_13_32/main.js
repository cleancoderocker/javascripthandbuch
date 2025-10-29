class Animal {

  // Öffentliche statische Eigenschaft
  static ANIMAL_COLORS = {
    WHITE: 'Weiß',
    BLACK: 'Schwarz',
    BROWN: 'Braun',
    GREEN: 'Grün',
    YELLOW: 'Gelb',
    ORANGE: 'Orange'
  };

  // Private statische Eigenschaft (interner Zähler)
  static #animalCount = 0;

  static #isValidColor(color) {
    return Object.values(Animal.ANIMAL_COLORS).includes(color);
  }

  static getAnimalCount() {
    return Animal.#animalCount = 0;
  }

  #name = 'Max Musterfisch';
  #color = 'Gold';
  #age = 25;

  constructor(name, color, age) {
    this.#name = name ? name : this.#name;
    this.#color = Animal.#isValidColor(color) ? color : this.#color;
    this.#age = age ? age : this.#age;
    // Zähler erhöhen, wenn Instanz erstellt wird
    Animal.#animalCount++;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get color() {
    return this.#color;
  }

  set color(color) {
    this.#color = color;
  }

  get age() {
    return this.#age;
  }

  set age(age) {
    this.#age = age;
  }

  eat(food) {
    console.log(`Mmpf mmpf, ${food}`);
  }

  drink(drink) {
    console.log(`Mmmmmmh, ${drink}`);
  }

  toString() {
    return `${this.#name}, ${this.#color}, ${this.#age}`;
  }

}

console.log(Animal.ANIMAL_COLORS);
// {
//   WHITE: 'Weiß',
//   BLACK: 'Schwarz',
//   BROWN: 'Braun',
//   GREEN: 'Grün',
//   YELLOW: 'Gelb',
//   ORANGE: 'Orange'
// }
// console.log(bird.ANIMAL_COLORS); // undefined

const bird = new Animal('Birdie', Animal.ANIMAL_COLORS.BLACK, 5);
console.log(Animal.getAnimalCount()); // 1

const fish = new Animal('Goldie', Animal.ANIMAL_COLORS.ORANGE, 2);
console.log(Animal.getAnimalCount()); // 2