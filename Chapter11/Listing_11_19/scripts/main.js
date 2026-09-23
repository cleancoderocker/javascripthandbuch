'use strict';
function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = document.getElementById('canvas').getContext('2d');
    context.save();                  // Save initial state
    context.fillStyle = '#FF0000';   // Filling color red
    context.scale(7,7);              // Scaling
    context.fillRect(0,0,40,40);     // Draw red square
    context.restore();               // Reset to initial state
    context.save();                  // Save initial state
    context.fillStyle = '#00FF00';   // Filling color green
    context.scale(6,6);              // Scaling
    context.fillRect(0,0,40,40);     // Draw green square
    context.restore();               // Reset to initial state
    context.save();                  // Save initial state
    context.fillStyle = '#0000FF';   // Filling color blue
    context.scale(5,5);              // Scaling
    context.fillRect(0,0,40,40);     // Draw blue square    
  }
}
document.addEventListener('DOMContentLoaded', draw);