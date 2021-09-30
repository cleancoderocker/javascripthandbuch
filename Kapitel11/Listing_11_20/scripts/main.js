'use strict';
function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = canvas.getContext('2d');
    context.save();                     // Speichern des initialen Zustands
    context.fillStyle = '#FF0000';      // Füllfarbe rot
    context.rotate(7);                  // Rotation
    context.fillRect(200,0,140,140);    // Zeichnen des roten Rechtecks
    context.restore();                  // Zurücksetzen auf initialen Zustand
    context.save();                     // Speichern des initialen Zustands
    context.fillStyle = '#00FF00';      // Füllfarbe grün
    context.rotate(7);                  // Rotation
    context.fillRect(200,-180,140,140); // Zeichnen des grünen Rechtecks
    context.restore();                  // Zurücksetzen auf initialen Zustand
    context.save();                     // Speichern des initialen Zustands
    context.fillStyle = '#0000FF';      // Füllfarbe blau
    context.rotate(7);                  // Rotation (Rotationswinkel im Bogenmaß)
    context.fillRect(380,-180,140,140); // Zeichnen des blauen Rechtecks
  }
}