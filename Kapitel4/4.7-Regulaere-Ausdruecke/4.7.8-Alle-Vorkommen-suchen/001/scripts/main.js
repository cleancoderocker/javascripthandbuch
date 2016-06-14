(function() {
  var text = 'Die private Telefonnumer lautet +49 30 1234567,' +
    ' die geschäftliche Telefonnumer lautet +49 30 1234568.';
  var regExp = /\+?\d{2}\s\d{2}\s\d{5,7}/g;
  var result;
  while ((result = regExp.exec(text)) !== null) {
    console.log(
      'Nummer ' + result[0]
      + ' gefunden an Index ' + result.index
      + '.'
    );
  }
})();