(function() {
  var age = prompt('Geben Sie bitte Ihr Alter ein.');
  var isAtLeast18;
  if(age >= 18) {
    isAtLeast18 = true;
  } else {
    isAtLeast18 = false;
  }
  console.log(isAtLeast18);
})();

(function() {
  var age = prompt('Geben Sie bitte Ihr Alter ein.');
  var isAtLeast18 = false;
  if(age >= 18) {
    isAtLeast18 = true;
  }
  console.log(isAtLeast18);
})();

(function() {
  var age = prompt('Geben Sie bitte Ihr Alter ein.');
  var isAtLeast18 = age >= 18 ? true : false;
  console.log(isAtLeast18);
})();

(function() {
  var age = prompt('Geben Sie bitte Ihr Alter ein.');
  var isAtLeast18 = age >= 18 ? true : false;
  var message = isAtLeast18 ? 'Über 18' : 'Unter 18';
  console.log(message);
})();