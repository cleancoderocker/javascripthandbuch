function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var context = canvas.getContext('2d');
    var path = new Path2D();
    path.moveTo(50, 200);    // Zeichnen des Pfades
    path.lineTo(400, 50);    // Zeichnen des Pfades
    path.lineTo(400, 200);   // Zeichnen des Pfades
    path.closePath();        // Schließen des Pfades
    context.stroke(path);    // Rahmen einfärben
  }
}