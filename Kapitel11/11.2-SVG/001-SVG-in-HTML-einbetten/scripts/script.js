'use strict';
function init() {
  let svgDocument = document.getElementById('svg');
  let circle = svg.getElementById('circle');
  circle.addEventListener('click', (e) => {
    console.log('Hallo Welt');
  });
  circle.addEventListener('mouseover', (e) => {
    circle.classList.toggle('active');
  });
  circle.addEventListener('mouseout', (e) => {
    circle.classList.toggle('active');
  });

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
