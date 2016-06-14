(function () {
  var name = 'Max Mustermann';
  console.log(name.indexOf('M'));     // Ausgabe: 0
  console.log(name.indexOf('mann'));  // Ausgabe: 10
  console.log(name.indexOf('M', 2));  // Ausgabe: 4
})();