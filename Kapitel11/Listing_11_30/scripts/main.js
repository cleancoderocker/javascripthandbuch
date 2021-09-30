'use strict';
function init() {
  const svgDocument = document.getElementById('svg');
  const circle = svg.getElementById('circle');
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