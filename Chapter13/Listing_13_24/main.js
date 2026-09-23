class Animal {
 
  #name = 'John Sample Fish';
  #color = 'Gold';
  #age = '25';
  
  constructor(name, color, age) {
    this.#name = name ? name : this._name;
    this.#color = color ? color : this._color;
    this.#age = age ? age : this._age;
  }
  
  // Setter and getter methods as usual
  
  #eat(food) {
    console.log(`Chow chow, ${food}`);
  }
  
  #drink(drink) {
    console.log(`Mmmmmmh, ${drink}`);
  }
  
  toString() {
    return `${this.#name}, ${this.#color}, ${this.#age}`;
  }
  
}

const snake = new Animal('Hissy', 'Green', 5);
// snake.#eat('bird'); // SyntaxError
// snake.#drink('water'); // SyntaxError

class Dog extends Animal {
 
  _type;
 
  constructor(name, color, age, type) {
    // error, because no call of parent constructor
  }
 
  get type() {
    return this._type;
  }
 
  set type(type) {
    this._type = type;
  }
 
  bark() {
    console.log('Woof woof');
  }
}

const dog = new Dog('Bello', 'White', 2, 'Maltese'); // Error!
dog.eat('cheese'); 
dog.bark();
console.log(dog.type);

