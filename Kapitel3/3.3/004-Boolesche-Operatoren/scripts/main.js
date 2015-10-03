function init() {
  var isLoggedIn = true;
  var isAdmin = false;
  var isLoggedInAndAdmin = isLoggedIn && isAdmin; // Und-Operator
  var isLoggedInOrAdmin = isLoggedIn || isAdmin;  // Oder-Operator
  var isLoggedOut = !isLoggedIn;                  // Negation
  console.log(isLoggedInAndAdmin);                // false
  console.log(isLoggedInOrAdmin);                 // true
  console.log(isLoggedOut);                       // false

  var max = {
    firstName: 'Max',
    lastName: 'Mustermann'
  };

  var moritz = {
    firstName: 'Moritz',
    lastName: 'Mustermann'
  };

  var isMaxAndMoritz = max && moritz;
  console.log(isMaxAndMoritz);  // Ausgabe: Object {firstName: "Moritz", lastName: "Mustermann"}

  console.log(false && 'Max');  // Ausgabe: false
  console.log('Max' && null);   // Ausgabe: null
  console.log(null && 'Max');   // Ausgabe: null

  var isMaxOrMoritz = max || moritz;
  console.log(isMaxOrMoritz);   // Ausgabe: Object {firstName: "Max", lastName: "Mustermann"}
  console.log(false || 'Max');  // Ausgabe: Max
  console.log('Max' || null);   // Ausgabe: Max
  console.log(null || 'Max');   // Ausgabe: Max

  var name = 'Max Mustermann';
  var emptyString = '';
  console.log(!name);           // Ausgabe: false
  console.log(!emptyString);    // Ausgabe: true
  var amount = 0;
  var age = 25;
  console.log(!amount);         // Ausgabe: true
  console.log(!age);            // Ausgabe: false
  console.log(!max);            // Ausgabe: false
  console.log(!null);           // Ausgabe: true
  console.log(!NaN);            // Ausgabe: true
  console.log(!undefined);      // Ausgabe: true
}

document.addEventListener('DOMContentLoaded', init);