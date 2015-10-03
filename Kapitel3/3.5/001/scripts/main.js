function calculateSum() {
  var x = parseInt(document.getElementById('field1').value);
  var y = parseInt(document.getElementById('field2').value);
  var result = x + y;
  var resultField = document.getElementById('result');
  resultField.value = result;
}