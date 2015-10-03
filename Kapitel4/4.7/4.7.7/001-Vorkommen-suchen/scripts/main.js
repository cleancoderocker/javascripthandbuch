(function() {
  var regExp = /^(\+?\d{2})\s(\d{2})\s(\d{5,7})$/;
  var result = regExp.exec('49 30 1234567');
  console.log(result[0]);     // 49 30 1234567
  console.log(result[1]);     // 49
  console.log(result[2]);     // 30
  console.log(result[3]);     // 1234567
  console.log(result.index);  // 0
  console.log(result.input);  // 49 30 1234567
})();
console.log('*****');
(function() {
  var text = 'Die private Telefonnumer lautet +49 30 1234567,' +
            ' die geschäftliche Telefonnumer lautet +49 30 1234568.';
  var regExp = /(\+?\d{2})\s(\d{2})\s(\d{5,7})/g;
  var result;
  while ((result = regExp.exec(text)) !== null) {
    console.log(
      'Nummer ' + result[0]
      + ' gefunden an Index ' + result.index
    );
  }
})();