(function() {
  var names = ['Max', 'Moritz', 'Peter'];
  var namesString = names.toString();
  console.log(namesString);           // Ausgabe: Max,Moritz,Peter
  var namesLocaleString = names.toLocaleString();
  console.log(namesLocaleString);     // Ausgabe: Max,Moritz,Peter
  var namesValue = names.valueOf();
  console.log(namesValue);            // Ausgabe: ["Max", "Moritz", "Peter"]
  var namesJoined = names.join('-');
  console.log(namesJoined);           // Ausgabe: Max-Moritz-Peter
})();