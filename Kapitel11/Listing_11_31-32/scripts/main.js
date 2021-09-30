'use strict';
function init() {
  const sliderX = document.getElementById('sliderX');
  const sliderY = document.getElementById('sliderY');
  sliderX.addEventListener('change', (e) => {
    moveCircle(e.target.value, 'x');
});
sliderY.addEventListener('change', (e) => {
  moveCircle(e.target.value, 'y');
});
}
function moveCircle(value, direction) {
  const svgDocument = document.getElementById('svg');
  const circle = svgDocument.getElementById('circle');
  circle.setAttribute('c' + direction, value);
}
window.addEventListener('DOMContentLoaded', init);