function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = canvas.getContext('2d');
    const path = new Path2D();
    path.moveTo(25,100);
    path.quadraticCurveTo(
      25,                   // Kontrollpunkt x-Koordinate
      25,                   // Kontrollpunkt y-Koordinate
      100,                  // Endpunkt x-Koordinate
      25                    // Endpunkt y-Koordinate
    );
    context.stroke(path);
  }
}
document.addEventListener('DOMContentLoaded', draw);