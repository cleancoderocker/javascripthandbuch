'use strict';
function init() {
  let sliderX = document.getElementById('sliderX');
  let sliderY = document.getElementById('sliderY');
  sliderX.addEventListener('change', (e) => {
    moveCircle(e.target.value, 'x');
});
sliderY.addEventListener('change', (e) => {
  moveCircle(e.target.value, 'y');
});
}
function moveCircle(value, direction) {
  let svgDocument = document.getElementById('svg');
  let circle = svgDocument.getElementById('circle');
  circle.setAttribute('c' + direction, value);
}
window.addEventListener('DOMContentLoaded', init);