(function() {
  var text = 'Die Telefonnumer lautet +49 30 1234567.';
  var regExp = /\+?\d{2}\s\d{2}\s\d{5,7}/;
  var result = regExp.exec(text)
  console.log(
    'Nummer ' + result[0]
    + ' gefunden an Index ' + result.index
    + '.'
  );
})();