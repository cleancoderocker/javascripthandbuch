function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var context = canvas.getContext('2d');
    var gradient = context.createLinearGradient(        // Erstellen des Farbverlaufs
      0,                                                // x-Koordinate Startpunkt
      0,                                                // y-Koordinate Startpunkt
      0,                                                // x-Koordinate Endpunkt
      150                                               // y-Koordinate Startpunkt
    );
    gradient.addColorStop(0, '#FF0000');                // Erster Farbwert
    gradient.addColorStop(0.5, '#00FF00');              // Zweiter Farbwert
    gradient.addColorStop(1, '#0000FF');                // Dritter Farbwert
    context.fillStyle = gradient;                       // Zuweisen des Stils
    context.fillRect(10,10,130,130);                    // Zeichnen eines Rechtecks
  }
}