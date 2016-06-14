function draw() {
  let canvas = document.getElementById('canvas');
  if (canvas.getContext){
    let context = canvas.getContext('2d');
    context.beginPath();        // Beginn des Pfades
    context.moveTo(50, 200);    // Zeichnen des Pfades
    context.lineTo(400, 50);    // Zeichnen des Pfades
    context.stroke();           // Rahmen einfärben
  }
}