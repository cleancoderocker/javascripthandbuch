function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = canvas.getContext('2d');
    const gradient = context.createRadialGradient(        // Erstellen des Farbverlaufs
      50,                                               // x-Koordinate Zentrum Kreis 1
      100,                                              // y-Koordinate Zentrum Kreis 1
      20,                                               // Radius Kreis 1
      100,                                              // x-Koordinate Zentrum Kreis 2
      100,                                              // y-Koordinate Zentrum Kreis 2
      80                                                // Radius Kreis 2
    );
    gradient.addColorStop(0, '#FF0000');                // erster Farbwert
    gradient.addColorStop(0.5, '#00FF00');              // zweiter Farbwert
    gradient.addColorStop(1, 'rgba(0,0,255,0)');        // dritter Farbwert
    context.fillStyle = gradient;                       // Zuweisen des Stils
    context.fillRect(10,10,200,200);                    // Zeichnen eines Rechtecks
  }
}
document.addEventListener('DOMContentLoaded', draw);