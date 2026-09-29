class Animal {
 
  // Public static method
  static getAnimalColors() {
    return {
      WHITE: 'White',
      BLACK: 'Black',
      BROWN: 'Brown',
      GREEN: 'Green',
      YELLOW: 'Yellow',
      ORANGE: 'Orange'
    }
  }
 
  // Private static method
  static #isValidColor(color) {
    return Object.values(Animal.getAnimalColors()).includes(color);
  }
 
  #name = 'Max Musterfisch';
  #color = 'Gold';
  #age = 25;
 
  constructor(name, color, age) {
    this.#name = name ? name : this.#name;
    this.#color = Animal.#isValidColor(color) ? color : this.#color;
    this.#age = age ? age : this.#age;
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
 
console.log(Animal.getAnimalColors());
// {
//   WHITE: 'White',
//   BLACK: 'Black',
//   BROWN: 'Brown',
//   GREEN: 'Green',
//   YELLOW: 'Yellow',
//   ORANGE: 'Orange'
// }
// console.log(bird.getAnimalColors()); // error because method is static
 
// First animal with valid color
const bird = new Animal('Birdie', Animal.getAnimalColors().BLACK, 5);
console.log(bird.name);  // "Birdie"
console.log(bird.color); // "Black"
console.log(bird.age);   // 5
 
// Second animal with invalid color
const fish = new Animal('Goldie', 'Pink', 3);
console.log(fish.name);   // "Goldie"
console.log(fish.color);  // "Gold" (default value because "Pink" is invalid)
console.log(fish.age);    // 3
