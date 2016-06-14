document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('button-calculate-sum');
  button.addEventListener('click', calculateSum);
});

function calculateSum() {
  var x = parseInt(document.getElementById('field1').value);
  var y = parseInt(document.getElementById('field2').value);
  var result = x + y;
  showResult(result);
}

function showResult(result) {
  var resultField = document.getElementById('result');
  resultField.value = result;
}