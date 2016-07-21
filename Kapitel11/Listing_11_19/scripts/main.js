function draw() {
  let canvas = document.getElementById('canvas');
  if (canvas.getContext){
    let canvas = document.getElementById('canvas').getContext('2d');
    canvas.save();                  // Speichern des initialen Zustands
    canvas.fillStyle = '#FF0000';   // Füllfarbe rot
    canvas.scale(7,7);              // Skalierung
    canvas.fillRect(0,0,40,40);     // Zeichnen des roten Rechtecks
    canvas.restore();               // Zurücksetzen auf initialen Zustand
    canvas.save();                  // Speichern des initialen Zustands
    canvas.fillStyle = '#00FF00';   // Füllfarbe grün
    canvas.scale(6,6);              // Skalierung
    canvas.fillRect(0,0,40,40);     // Zeichnen des grünen Rechtecks
    canvas.restore();               // Zurücksetzen auf initialen Zustand
    canvas.save();                  // Speichern des initialen Zustands
    canvas.fillStyle = '#0000FF';   // Füllfarbe blau
    canvas.scale(5,5);              // Skalierung
    canvas.fillRect(0,0,40,40);     // Zeichnen des blauen Rechtecks
  }
}
document.addEventListener('DOMContentLoaded', draw);