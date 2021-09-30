function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = canvas.getContext('2d');
    const path = new Path2D();
    path.moveTo(50, 200);    // Zeichnen des Pfads
    path.lineTo(400, 50);    // Zeichnen des Pfads
    path.lineTo(400, 200);   // Zeichnen des Pfads
    path.closePath();        // Schließen des Pfads
    context.stroke(path);    // Rahmen einfärben
  }
}
document.addEventListener('DOMContentLoaded', draw);