'use strict';
document.addEventListener('DOMContentLoaded', function() {
  let button = document.getElementById('button-calculate-sum');
  button.addEventListener('click', calculateSum);
});
function calculateSum() {
  let x = parseInt(document.getElementById('field1').value);
  let y = parseInt(document.getElementById('field2').value);
  let result = x + y;
  showResult(result);
}
function showResult(result) {
  let resultField = document.getElementById('result');
  resultField.value = result;
}