function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var context = canvas.getContext('2d');
    var path = new Path2D();
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