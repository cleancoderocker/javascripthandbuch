'use strict';
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('button-calculate-sum');
  button.addEventListener('click', calculateSum);
});
function calculateSum() {
  const x = parseInt(document.getElementById('field1').value);
  const y = parseInt(document.getElementById('field2').value);
  const result = x + y;
  showResult(result);
}
function showResult(result) {
  const resultField = document.getElementById('result');
  resultField.value = result;
}