function init() {
  var shoppingCart = [    // Beginn des äußeren Arrays
    {                     // Erster Eintrag
      name: 'Plattenspieler',
      price: 200,
      quantity: 1
    },
    {                     // Zweiter Eintrag
      name: 'Lautsprecher',
      price: 400,
      quantity: 2
    },
    {                     // Dritter Eintrag
      name: 'Vorverstärker',
      price: 80,
      quantity: 1
    },
    {                     // Vierter Eintrag
      name: 'Lautsprecherkabel',
      price: 20,
      quantity: 2
    }
  ];                      // Ende des äußeren Arrays
  console.log(shoppingCart[0].name);      // Ausgabe: Plattenspieler
  console.log(shoppingCart[0].price);     // Ausgabe: 200
  console.log(shoppingCart[0].quantity);  // Ausgabe: 1
  console.log(shoppingCart[1].name);      // Ausgabe: Lautsprecher
  console.log(shoppingCart[1].price);     // Ausgabe: 400
  console.log(shoppingCart[1].quantity);  // Ausgabe: 2
  console.log(shoppingCart[2].name);      // Ausgabe: Vorverstärker
  console.log(shoppingCart[2].price);     // Ausgabe: 80
  console.log(shoppingCart[2].quantity);  // Ausgabe: 1
  console.log(shoppingCart[3].name);      // Ausgabe: Lautsprecherkabel
  console.log(shoppingCart[3].price);     // Ausgabe: 20
  console.log(shoppingCart[3].quantity);  // Ausgabe: 2
}

document.addEventListener('DOMContentLoaded', init);