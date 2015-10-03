function init() {

  // Das wäre sehr unhandlich:
  var shoppingCartItem1 = 'Plattenspieler';     // Erster Eintrag
  var shoppingCartItem2 = 'Lautsprecher';       // Zweiter Eintrag
  var shoppingCartItem3 = 'Vorverstärker';      // Dritter Eintrag
  var shoppingCartItem4 = 'Lautsprecherkabel';  // Vierter Eintrag

  // Arrays sind viel flexibler
  var shoppingCart = [    // Beginn der Array-Definition
    'Plattenspieler',     // Erster Eintrag
    'Lautsprecher',       // Zweiter Eintrag
    'Vorverstärker',      // Dritter Eintrag
    'Lautsprecherkabel'   // Vierter Eintrag
  ];                      // Ende der Array-Definition
  var highscores = [
    74334, 24344, 54533, 32553, 67556
  ];
  var values = [        // Ein Array ...
    'Max Mustermann',   // ... mit einer Zeichenkette ...
    22,                 // ... einer Zahl ...
    true                // ... und einem booleschen Wert.
  ];
}

document.addEventListener('DOMContentLoaded', init);