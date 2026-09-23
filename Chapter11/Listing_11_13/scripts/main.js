function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = canvas.getContext('2d');
    const path = new Path2D();
    path.moveTo(25,200);  // Starting point
    path.arcTo(
      25,                 // x coordinate first control point
      25,                 // y coordinate first control point
      200,                // x coordinate second control point
      25,                 // y coordinate second control point
      90                  // Radius of arc
    );
    path.lineTo(200, 25); // Target point
    context.stroke(path);    
  }
}
document.addEventListener('DOMContentLoaded', draw);