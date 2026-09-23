'use strict';
function draw() {
  const ctx = document.getElementById('canvas').getContext('2d');

  ctx.fillRect(0, 0, 150, 150);    // Draw square with default settings
                                   // Background color black
  ctx.save();                      // Save current state (state 1)

  ctx.fillStyle = '#00FF00';       // Change settings
  ctx.fillRect(15, 15, 120, 120);  // Draw square with new settings
                                   // Background color green

  ctx.save();                      // Save current state (state 2)
  ctx.fillStyle = '#FF0000';       // Change settings
  ctx.fillRect(30, 30, 90, 90);    // Draw square with new settings
                                   // Background color red

  ctx.restore();                   // Load previous state (state 2)
  ctx.fillRect(45, 45, 60, 60);    // Draw square with previous
                                   // settings, background color green

  ctx.restore();                   // Load previous state (state 1)
  ctx.fillRect(60, 60, 30, 30);    // Draw square with default settings
                                   // Background color black
}
document.addEventListener('DOMContentLoaded', draw);