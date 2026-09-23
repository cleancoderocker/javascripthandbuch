function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    window.requestAnimationFrame(redraw);
  }
}

function redraw() {
  const context = document.getElementById('canvas').getContext('2d');
  context.clearRect(0,0,500,300);   // (1) Clear drawing area
  const time = new Date();
  const angle = ((2*Math.PI)/6)*time.getSeconds() 
              + ((2*Math.PI)/6000)*time.getMilliseconds();
                                    // red rectangle:
  context.fillStyle = '#FF0000';    //
  context.save();                   // (2) Save state
  context.translate(150,150);       // (3) Draw
  context.rotate(angle);            //
  context.translate(0,25);          //
  context.fillRect(5,5,20,20);      //
  context.restore();                // (4) Load state
                                    // green rectangle:
  context.fillStyle = '#00FF00';    //
  context.save();                   // (2) Save state
  context.translate(150,150);       // (3) Draw
  context.rotate(angle);            //
  context.translate(0,50);          //
  context.fillRect(5,5,20,20);      //
  context.restore();                // (4) Load state
                                    // blue rectangle:
  context.fillStyle = '#0000FF';    //
  context.save();                   // (2) Save state
  context.translate(150,150);       // (3) Draw
  context.rotate(angle);            //
  context.translate(0,75);          //
  context.fillRect(5,5,20,20);      //
  context.restore();                // (4) Load state
  window.requestAnimationFrame(redraw);
}
window.addEventListener('DOMContentLoaded', draw);
