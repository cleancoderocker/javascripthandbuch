'use strict';
function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = document.getElementById('canvas').getContext('2d');
    context.save();                  // Save initial state
    context.fillStyle = '#FF0000';   // Filling color red
    context.translate(40, 40);       // Translation
    context.fillRect(0,0,40,40);     // Draw red square
    context.restore();               // Reset to initial state
    context.save();                  // Save initial state
    context.fillStyle = '#00FF00';   // Filling color green
    context.translate(100, 40);      // Translation
    context.fillRect(0,0,40,40);     // Draw green square
    context.restore();               // Reset to initial state
    context.save();                  // Save initial state
    context.fillStyle = '#0000FF';   // Filling color blue
    context.translate(160, 40);      // Translation
    context.fillRect(0,0,40,40);     // Draw blue square    
  }
}