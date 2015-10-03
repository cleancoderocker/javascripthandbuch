function init() {
  var shoppingCart = [    // Beginn des äußeren Arrays
    [                     // Erster Eintrag
      'Plattenspieler',
      200,
      1
    ],
    [                     // Zweiter Eintrag
      'Lautsprecher',
      400,
      2
    ],
    [                     // Dritter Eintrag
      'Vorverstärker',
      80,
      1
    ],
    [                     // Vierter Eintrag
      'Lautsprecherkabel',
      20,
      2
    ]
  ];                      // Ende des äußeren Arrays
  console.log(shoppingCart[0][0]);  // Ausgabe: Plattenspieler
  console.log(shoppingCart[0][1]);  // Ausgabe: 200
  console.log(shoppingCart[0][2]);  // Ausgabe: 1
  console.log(shoppingCart[1][0]);  // Ausgabe: Lautsprecher
  console.log(shoppingCart[1][1]);  // Ausgabe: 400
  console.log(shoppingCart[1][2]);  // Ausgabe: 2
  console.log(shoppingCart[2][0]);  // Ausgabe: Vorverstärker
  console.log(shoppingCart[2][1]);  // Ausgabe: 80
  console.log(shoppingCart[2][2]);  // Ausgabe: 1
  console.log(shoppingCart[3][0]);  // Ausgabe: Lautsprecherkabel
  console.log(shoppingCart[3][1]);  // Ausgabe: 20
  console.log(shoppingCart[3][2]);  // Ausgabe: 2
}

document.addEventListener('DOMContentLoaded', init);