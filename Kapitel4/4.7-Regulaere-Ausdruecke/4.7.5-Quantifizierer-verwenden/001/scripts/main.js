(function() {
  var regExp = /^abcdef?$/;
  console.log(regExp.test('abcde'));    // true
  console.log(regExp.test('abcdef'));   // true
  console.log(regExp.test('abcdeff'));  // false
})();
console.log('*****');
(function() {
  var regExp = /^abcdef*$/;
  console.log(regExp.test('abcde'));    // true
  console.log(regExp.test('abcdef'));   // true
  console.log(regExp.test('abcdeff'));  // true
})();
console.log('*****');
(function() {
  var regExp = /^abcdef+$/;
  console.log(regExp.test('abcde'));    // false
  console.log(regExp.test('abcdef'));   // true
  console.log(regExp.test('abcdeff'));  // true
})();
console.log('*****');
(function() {
  var regExp = /^abcdef{2}$/;
  console.log(regExp.test('abcde'));      // false
  console.log(regExp.test('abcdef'));     // false
  console.log(regExp.test('abcdeff'));    // true
  console.log(regExp.test('abcdefff'));   // false
  console.log(regExp.test('abcdeffff'));  // false
})();
console.log('*****');
(function() {
  var regExp = /^abcdef{2,}$/;
  console.log(regExp.test('abcde'));      // false
  console.log(regExp.test('abcdef'));     // false
  console.log(regExp.test('abcdeff'));    // true
  console.log(regExp.test('abcdefff'));   // true
  console.log(regExp.test('abcdeffff'));  // true
})();
console.log('*****');
(function() {
  var regExp = /^abcdef{2,3}$/;
  console.log(regExp.test('abcde'));      // false
  console.log(regExp.test('abcdef'));     // false
  console.log(regExp.test('abcdeff'));    // true
  console.log(regExp.test('abcdefff'));   // true
  console.log(regExp.test('abcdeffff'));  // false
})();