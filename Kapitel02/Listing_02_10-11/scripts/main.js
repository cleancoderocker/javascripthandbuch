function calculateSum() {
  let x = parseInt(document.getElementById('field1').value);
  let y = parseInt(document.getElementById('field2').value);
  let result = document.getElementById('result');
  console.log(x + y);
  result.value = x + y;
}