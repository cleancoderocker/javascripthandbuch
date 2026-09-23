function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = canvas.getContext('2d');
    const gradient = context.createRadialGradient(      // Create gradient
      50,                                               // x coordinate circle 1 center
      100,                                              // y coordinate circle 1 center
      20,                                               // Radius circle 1
      100,                                              // x coordinate circle 2 center
      100,                                              // y coordinate circle 2 center
      80                                                // Radius circle 2
    );
    gradient.addColorStop(0, '#FF0000');                // first color value
    gradient.addColorStop(0.5, '#00FF00');              // second color value
    gradient.addColorStop(1, 'rgba(0,0,255,0)');        // third color value
    context.fillStyle = gradient;                       // Assign style
    context.fillRect(10,10,200,200);                    // Draw rectangle    
  }
}
document.addEventListener('DOMContentLoaded', draw);