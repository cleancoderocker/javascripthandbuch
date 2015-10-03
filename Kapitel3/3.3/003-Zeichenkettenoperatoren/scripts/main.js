function init() {
  var salutation = 'Ihr persönlicher Newsletter,';  // Zeichenkette 1
  var name = 'Max Mustermann';                      // Zeichenkette 2
  var message = salutation + ' ' + name;            // Konkatenation
  console.log(message);

  // Alternativ:
  /*
  var message = salutation;
  message += ' ';
  message += name;
  console.log(message);
  */
}

document.addEventListener('DOMContentLoaded', init);