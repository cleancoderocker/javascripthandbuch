(function() {
  var text = 'Max,Mustermann,4711,45,180,80';
  var result = text.split(',');
  var firstName = result[0];
  var lastName = result[1];
  var id = result[2];
  var age = result[3];
  var height = result[4];
  var weight = result[5];
  console.log(firstName);   // Max
  console.log(lastName);    // Mustermann
  console.log(id);          // 4711
  console.log(age);         // 45
  console.log(height);      // 180
  console.log(weight);      // 80
})();