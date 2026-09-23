function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = canvas.getContext('2d');
    const path = new Path2D();
    path.moveTo(25,100);    // Starting point
    path.quadraticCurveTo(
      25,                   // control point x coordinate
      25,                   // control point y coordinate
      100,                  // target point x coordinate
      25                    // target point y coordinate
    );
    context.stroke(path);    
  }
}
document.addEventListener('DOMContentLoaded', draw);