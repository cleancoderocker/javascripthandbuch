function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = canvas.getContext('2d');
    const path = new Path2D();
    path.moveTo(25,100);  // Starting point
    path.bezierCurveTo(
      100,                // control point x1 coordinate
      100,                // control point y1 coordinate
      25,                 // control point x2 coordinate
      25,                 // control point y2 coordinate
      100,                // target point x coordinate
      25                  // target point y coordinate
    );
    context.stroke(path);    
  }
}
document.addEventListener('DOMContentLoaded', draw);