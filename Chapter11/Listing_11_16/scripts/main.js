'use strict';
function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    const context = canvas.getContext('2d');
    const gradient = context.createLinearGradient(      // Create gradient
      0,                                                // x coordinate starting point
      0,                                                // y coordinate starting point
      0,                                                // x coordinate end point
      150                                               // y coordinate end point
    );
    gradient.addColorStop(0, '#FF0000');                // first color value
    gradient.addColorStop(0.5, '#00FF00');              // second color value
    gradient.addColorStop(1, '#0000FF');                // third color value
    context.fillStyle = gradient;                       // Assign style
    context.fillRect(20, 20, 460, 240);                 // Draw rectangle
  }
}
document.addEventListener('DOMContentLoaded', draw);