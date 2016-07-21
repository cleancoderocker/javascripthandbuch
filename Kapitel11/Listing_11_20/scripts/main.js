function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    let canvas = document.getElementById('canvas').getContext('2d');
    canvas.save();                     // Speichern des initialen Zustands
    canvas.fillStyle = '#FF0000';      // Füllfarbe rot
    canvas.rotate(7);                  // Rotation
    canvas.fillRect(200,0,140,140);    // Zeichnen des roten Rechtecks
    canvas.restore();                  // Zurücksetzen auf initialen Zustand
    canvas.save();                     // Speichern des initialen Zustands
    canvas.fillStyle = '#00FF00';      // Füllfarbe grün
    canvas.rotate(7);                  // Rotation
    canvas.fillRect(200,-180,140,140); // Zeichnen des grünen Rechtecks
    canvas.restore();                  // Zurücksetzen auf initialen Zustand
    canvas.save();                     // Speichern des initialen Zustands
    canvas.fillStyle = '#0000FF';      // Füllfarbe blau
    canvas.rotate(7);                  // Rotation
    canvas.fillRect(380,-180,140,140); // Zeichnen des blauen Rechtecks
  }
}