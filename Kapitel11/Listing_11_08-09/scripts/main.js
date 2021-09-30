function draw() {
  let canvas = document.getElementById('canvas');
  if (canvas.getContext){
    let context = canvas.getContext('2d');
    context.beginPath();        // Beginn des Pfads
    context.moveTo(50, 200);    // Zeichnen des Pfads
    context.lineTo(400, 50);    // Zeichnen des Pfads
    context.lineTo(400, 200);   // Zeichnen des Pfads
    context.closePath();        // Schließen des Pfads
    context.stroke();           // Rahmen einfärben
  }
}
document.addEventListener('DOMContentLoaded', draw);