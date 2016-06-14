(function() {
  var regExp = new RegExp(
    '^([\w-]+(?:\.[\w-]+)*)' +
    '@' +
    '((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$'
  );
  var email = 'info@philipackermann.de';
  var result = regExp.test(email);
  console.log(result);
})();