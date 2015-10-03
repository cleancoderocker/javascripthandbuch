(function() {
  var text = 'Dieser Text enthält eine Telefonnummer: +49 30 1234567';
  var text2 = 'Dieser Text enthält keine Telefonnummer.';
  var regExp = /(\+?\d{2})\s(\d{2})\s(\d{5,7})/g;
  console.log(text.search(regExp));   // Ausgabe: 39
  console.log(text2.search(regExp));  // Ausgabe: -1
})();