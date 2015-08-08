function drawClock() {
  var container = document.getElementById('clock'); // Der Container für die Uhr
  var clockSize = parseInt(container.style.height); // Größe der Uhr

  var canvas = document.createElement('canvas');    // Erzeugen eines Canvas-Elements
  container.appendChild(canvas);                    // Hinzufügen des Canvas-Elements
                                                    // in den Container
  canvas.width = clockSize;
  canvas.height = clockSize;
  canvas.position = 'relative';

  var context = canvas.getContext('2d');            // Zugriff auf den Kontext
  var radius = clockSize / 2 - 4;                   // Radius der Uhr

  setInterval(drawClock, 1000);                     // Jede Sekunde wird die Uhr neu gezeichnet
  function drawClock() {
    context.clearRect(0,0,clockSize, clockSize);    // Löscht den Bereich für die Uhr
    drawCircle();
    drawCenter();
    drawNumerals();
    drawClockHands();
  }
  function drawCircle() {
    context.beginPath();
    context.arc(clockSize/2, clockSize/2, radius, 0, Math.PI*2, true);
    context.stroke();
  }
  function drawCenter() {
    context.beginPath();
    context.arc(clockSize/2, clockSize/2, clockSize/32, 0, Math.PI*2, true);
    context.fill();
  }
  function drawNumerals() {
    var numeralRadius = 0.8 * radius;
    var fontHeight = radius / 5;
    context.font = fontHeight + 'px Times';
    for (var i=1; i<=12; i++) {
      var fontWidth = context.measureText(i).width;
      var angle = (i-3) * 30; angle = angle * Math.PI / 180;
      var x = clockSize/2 + Math.cos(angle)*numeralRadius - fontWidth/2;
      var y = clockSize/2 + Math.sin(angle)*numeralRadius + fontHeight/3;
      context.fillText(i, x, y);
    }
  }
  function drawClockHands() {
    var date = new Date;
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours()%12 * 5 + minutes/12;
    drawOneClockHand(hours-15, 0.6*radius,0.15*clockSize);
    drawOneClockHand(minutes-15, 0.75*radius,0.09*clockSize);
    drawOneClockHand(seconds-15, 0.75*radius,3);
  }
  function drawOneClockHand(timeUnits, length, width) {
    var x0 = clockSize/2;
    var y0 = clockSize/2;
    var x1 = Math.cos(timeUnits * Math.PI / 30) * length;
    var y1 = Math.sin(timeUnits * Math.PI / 30) * length;
    context.lineWidth = Math.ceil(width*radius/400);
    context.moveTo(x0, y0);
    context.lineTo(x0+x1, y0+y1);
    context.stroke();
  }
}