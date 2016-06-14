function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    window.requestAnimationFrame(redraw);
  }
}

function redraw() {
  var context = document.getElementById('canvas').getContext('2d');
  context.clearRect(0,0,500,300);   // (1) Leeren der Zeichenfläche
  var time = new Date();
  var angle = ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds();
                                    // Rotes Rechteck:
  context.fillStyle = '#FF0000';    // (2) Zustand speichern
  context.save();                   //
  context.translate(150,150);       // (3) Zeichnen
  context.rotate(angle);            //
  context.translate(0,25);          //
  context.fillRect(5,5,20,20);      //
  context.restore();                // (4) Zustand laden
                                    // Grünes Rechteck:
  context.fillStyle = '#00FF00';    // (2) Zustand speichern
  context.save();                   //
  context.translate(150,150);       // (3) Zeichnen
  context.rotate(angle);            //
  context.translate(0,50);          //
  context.fillRect(5,5,20,20);      //
  context.restore();                // (4) Zustand laden
                                    // Blaues Rechteck:
  context.fillStyle = '#0000FF';    // (2) Zustand speichern
  context.save();                   //
  context.translate(150,150);       // (3) Zeichnen
  context.rotate(angle);            //
  context.translate(0,75);          //
  context.fillRect(5,5,20,20);      //
  context.restore();                // (4) Zustand laden
  window.requestAnimationFrame(redraw);
}
window.addEventListener('DOMContentLoaded', draw);