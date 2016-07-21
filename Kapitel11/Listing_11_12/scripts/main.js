function draw() {
  let canvas = document.getElementById('canvas');
  if (canvas.getContext){
    let context = canvas.getContext('2d');
    let path = new Path2D();
    path.moveTo(25,100);
    path.bezierCurveTo(
      100,              // Kontrollpunkt x1-Koordinate
      100,              // Kontrollpunkt y1-Koordinate
      25,               // Kontrollpunkt x2-Koordinate
      25,               // Kontrollpunkt y2-Koordinate
      100,              // Endpunkt x-Koordinate
      25                // Endpunkt y-Koordinate
    );
    context.stroke(path);
  }
}
document.addEventListener('DOMContentLoaded', draw);