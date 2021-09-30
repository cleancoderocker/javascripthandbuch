function init() {
  const canvas = document.getElementById('canvas');
  canvas.addEventListener('mousemove', handleMouseMove, false);
  const context = canvas.getContext('2d');  // Zeichenfläche holen.
  let started = false;          // Merken, ob Pfad begonnen.
  function handleMouseMove(e) {
    let x, y;
    if (e.clientX               // Wenn die x-Position angegeben ...
      || e.clientX == 0) {      // ... und nicht 0 ...
      x = e.clientX;            // ... x-Position merken ...
      y = e.clientY;            // ... y-Position merken.
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