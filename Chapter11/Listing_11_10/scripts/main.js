function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = canvas.getContext('2d');
    const path = new Path2D();
    path.moveTo(50, 200);    // Draw path
    path.lineTo(400, 50);    // Draw path
    path.lineTo(400, 200);   // Draw path
    path.closePath();        // Close path
    context.stroke(path);    // Color frame    
  }
}
document.addEventListener('DOMContentLoaded', draw);