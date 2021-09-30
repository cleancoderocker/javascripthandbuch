'use strict';
function Animal(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
};
const fish = new Animal('Fischi', 'Grün', 2);
console.log(fish.name);   // Ausgabe: "Fischi"
console.log(fish.color);  // Ausgabe: "Grün"
console.log(fish.age);    // Ausgabe: 2