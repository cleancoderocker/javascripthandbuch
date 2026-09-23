function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = canvas.getContext('2d');
    context.beginPath();        // Start of path
    context.moveTo(50, 200);    // Define starting point
    context.lineTo(400, 50);    // Straight line to specified point
    context.lineTo(400, 200);   // straight line to specified point
    context.closePath();        // Close path
    context.stroke();           // Color frame    
  }
}
document.addEventListener('DOMContentLoaded', draw);