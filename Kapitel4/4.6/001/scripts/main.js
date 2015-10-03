function init() {
  console.log(Math.min(0, 4711, 30, 5, -8, -40));   // Ausgabe: 4711
  console.log(Math.max(0, 4711, 30, 5, -8, -40));   // Ausgabe: -40
  console.log(Math.random());
  console.log(Math.round(4.7));                     // Ausgabe: 5
  console.log(Math.round(4.4));                     // AUsgabe: 4
  console.log(Math.ceil(4.4));                      // Ausgabe: 5
  console.log(Math.floor(4.7));                     // Ausgabe: 4
}

document.addEventListener('DOMContentLoaded', init);