function init() {
  const canvas = document.getElementById('canvas');
  canvas.addEventListener('mousemove', handleMouseMove, false);
  const context = canvas.getContext('2d');  // Zeichenfläche holen.
  let started = false;                      // Merken, ob Pfad begonnen.
  function handleMouseMove(event) {
    let x, y;
    if (event.clientX           // Wenn die x-Position angegeben ...
      || event.clientX == 0) {  // ... und nicht 0 ...
      x = event.clientX;        // ... x-Position merken ...
      y = event.clientY;        // ... y-Position merken.
    }
    if (!started) {             // Wenn Pfad noch nicht begonnen ...
      context.beginPath();      // ... Pfad beginnen und ...
      context.moveTo(x, y);     // ... zu Position bewegen.
      started = true;           // Merken, dass Pfad begonnen.
    } else {                    // Wenn Pfad schon begonnen ...
      context.lineTo(x, y);     // ... zu Position bewegen ...
      context.stroke();         // ... und Verbindung zeichnen.
    }
  }
}

document.addEventListener('DOMContentLoaded', init);
