(function() {
  var text = 'Die private Telefonnumer lautet +49 30 1234567,' +
    ' die geschäftliche Telefonnumer lautet +49 30 1234568.';
  var regExp = /(\+?\d{2})\s(\d{2})\s(\d{5,7})/g;
  text = text.replace(regExp, '<Nummer verborgen>');
  console.log(text);
  // Die private Telefonnumer lautet <Nummer verborgen>,
  // die geschäftliche Telefonnumer lautet <Nummer verborgen>.
})();
console.log('*****');
(function() {
  var text = 'Die private Telefonnumer lautet +49 30 1234567,' +
    ' die geschäftliche Telefonnumer lautet +49 30 1234568.';
  var regExp = /(\+?\d{2})\s(\d{2})\s(\d{5,7})/g;
  text = text.replace(regExp, function(number) {
    return number.substring(0, 9) + 'XXXXX';
  });
  console.log(text);
  // Die private Telefonnumer lautet +49 30 12XXXXX,
  // die geschäftliche Telefonnumer lautet +49 30 12XXXXX.
})();