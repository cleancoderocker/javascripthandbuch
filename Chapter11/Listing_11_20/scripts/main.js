'use strict';
function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = document.getElementById('canvas').getContext('2d');
    context.save();                     // Save initial state
    context.fillStyle = '#FF0000';      // Filling color red
    context.rotate(7);                  // Rotation (rotation anglein radians)
    context.fillRect(200,0,140,140);    // Draw red square
    context.restore();                  // Reset to initial state
    context.save();                     // Save initial state
    context.fillStyle = '#00FF00';      // Filling color green
    context.rotate(7);                  // Rotation (rotation anglein radians)
    context.fillRect(200,-180,140,140); // Draw green square
    context.restore();                  // Reset to initial state
    context.save();                     // Save initial state
    context.fillStyle = '#0000FF';      // Filling color blue
    context.rotate(7);                  // Rotation (rotation anglein radians)
    context.fillRect(380,-180,140,140); // Draw blue square    
  }
}