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
}
window.addEventListener('DOMContentLoaded', init);