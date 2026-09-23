function init() {
  const canvas = document.getElementById('canvas');
  canvas.addEventListener('mousemove', handleMouseMove, false);
  const context = canvas.getContext('2d');  // Get drawing area.
  let started = false;                      // Notice start of path.
  function handleMouseMove(e) {
    let x, y;
    if (e.clientX               // If x position is specified ...
      || e.clientX == 0) {      // ... and not 0 ...
      x = e.clientX;            // ... remember x position ...
      y = e.clientY;            // ... remember y position.
    }
    if (!started) {             // If path not yet started ...
      context.beginPath();      // ... start path and ...
      context.moveTo(x, y);     // ... move to position.
      started = true;           // Notice that path has started.
    } else {                    // If path has started ...
      context.lineTo(x, y);     // ... move to position ...
      context.stroke();         // ... and draw connection.
    }
  }
}

document.addEventListener('DOMContentLoaded', init);
