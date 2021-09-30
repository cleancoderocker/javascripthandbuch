'use strict';
function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = canvas.getContext('2d');
    const gradient = context.createLinearGradient(        // Erstellen des Farbverlaufs
      0,                                                // x-Koordinate Startpunkt
      0,                                                // y-Koordinate Startpunkt
      0,                                                // x-Koordinate Endpunkt
      150                                               // y-Koordinate Endpunkt
    );
    gradient.addColorStop(0, '#FF0000');                // erster Farbwert
    gradient.addColorStop(0.5, '#00FF00');              // zweiter Farbwert
    gradient.addColorStop(1, '#0000FF');                // dritter Farbwert
    context.fillStyle = gradient;                       // Zuweisen des Stils
    context.fillRect(20, 20, 460, 240);                 // Zeichnen eines Rechtecks
  }
}
document.addEventListener('DOMContentLoaded', draw);