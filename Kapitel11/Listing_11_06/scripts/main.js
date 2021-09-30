'use strict';
function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = canvas.getContext('2d');
    context.fillStyle = 'rgb(200,0,0)';           // Festlegen der Hintergrundfarbe
    context.fillRect (10, 10, 80, 80);            // Zeichnen des 1. Rechtecks
    context.fillStyle = 'rgba(0, 0, 200, 0.5)';   // Festlegen der Hintergrundfarbe
    context.fillRect (100, 10, 80, 80);           // Zeichnen des 2. Rechtecks
    context.strokeStyle = 'rgb(200,0,0)';         // Festlegen der Rahmenfarbe
    context.strokeRect (190, 10, 80, 80);         // Zeichnen des 3. Rechtecks
    context.strokeStyle = 'rgba(0, 0, 200, 0.5)'; // Festlegen der Rahmenfarbe
    context.strokeRect (280, 10, 80, 80);         // Zeichnen des 4. Rechtecks
    context.fillStyle = 'rgb(200,0,0)';           // Festlegen der Hintergrundfarbe
    context.fillRect (370, 10, 80, 80);           // Zeichnen des "Kopfs"
    context.clearRect (380, 20, 60, 20);          // Zeichnen der "Augenpartie"
    context.fillRect (390, 25, 10, 10);           // Zeichnen des linken "Auges"
    context.fillRect (420, 25, 10, 10);           // Zeichnen des rechten "Auges"
    context.clearRect (385, 60, 50, 10);          // Zeichnen des "Mundes"
  }
}
document.addEventListener('DOMContentLoaded', draw);