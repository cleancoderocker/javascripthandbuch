function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    let canvas = document.getElementById('canvas').getContext('2d');
    canvas.save();                  // Speichern des initialen Zustands
    canvas.fillStyle = '#FF0000';   // Füllfarbe rot
    canvas.translate(40, 40);       // Translation
    canvas.fillRect(0,0,40,40);     // Zeichnen des roten Rechtecks
    canvas.restore();               // Zurücksetzen auf initialen Zustand
    canvas.save();                  // Speichern des initialen Zustands
    canvas.fillStyle = '#00FF00';   // Füllfarbe grün
    canvas.translate(100, 40);      // Translation
    canvas.fillRect(0,0,40,40);     // Zeichnen des grünen Rechtecks
    canvas.restore();               // Zurücksetzen auf initialen Zustand
    canvas.save();                  // Speichern des initialen Zustands
    canvas.fillStyle = '#0000FF';   // Füllfarbe blau
    canvas.translate(160, 40);      // Translation
    canvas.fillRect(0,0,40,40);     // Zeichnen des blauen Rechtecks
  }
}