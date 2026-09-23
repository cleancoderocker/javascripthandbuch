function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = canvas.getContext('2d');
    context.font = '48px serif';                // Font properties
    context.fillText('Hello World', 10, 50);    // Draw text
    context.strokeText('Hello World', 10, 100); // Draw text    
  }
}
document.addEventListener('DOMContentLoaded', draw);