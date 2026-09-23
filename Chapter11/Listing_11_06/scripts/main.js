'use strict';
function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = canvas.getContext('2d');
    context.fillStyle = 'rgb(200,0,0)';            // Set background color
    context.fillRect (10, 10, 80, 80);             // Draw 1st rectangle
    context.fillStyle = 'rgba(0, 0, 200, 0.5)';    // Set background color
    context.fillRect (100, 10, 80, 80);            // Draw 2nd rectangle
    context.strokeStyle = 'rgb(200,0,0)';          // Set frame color
    context.strokeRect (190, 10, 80, 80);          // Draw 3rd rectangle
    context.strokeStyle = 'rgba(0, 0, 200, 0.5)';  // Set frame color
    context.strokeRect (280, 10, 80, 80);          // Draw 4th rectangle
    context.fillStyle = 'rgb(200,0,0)';            // Set background color
    context.fillRect (370, 10, 80, 80);            // Draw "head"
    context.clearRect (380, 20, 60, 20);           // Draw "eye area"
    context.fillRect (390, 25, 10, 10);            // Draw left "eye"
    context.fillRect (420, 25, 10, 10);            // Draw right "eye"
    context.clearRect (385, 60, 50, 10);           // Draw "mouth"
  }
}
document.addEventListener('DOMContentLoaded', draw);