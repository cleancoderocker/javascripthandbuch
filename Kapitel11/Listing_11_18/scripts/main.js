'use strict';
function draw() {
  const ctx = document.getElementById('canvas').getContext('2d');

  ctx.fillRect(0, 0, 150, 150);    // Rechteck zeichnen mit Standardeinstellungen
                                   // Hintergrundfarbe schwarz
  ctx.save();                      // Speichern des aktuellen Zustandes (Zustand 1)

  ctx.fillStyle = '#00FF00';       // Einstellungen ändern
  ctx.fillRect(15, 15, 120, 120);  // Rechteck zeichnen mit neuen Einstellungen
                                   // Hintergrundfarbe grün

  ctx.save();                      // Speichern des aktuellen Zustandes (Zustand 2)
  ctx.fillStyle = '#FF0000';       // Einstellungen ändern
  ctx.fillRect(30, 30, 90, 90);    // Rechteck zeichnen mit neuen Einstellungen
                                   // Hintergrundfarbe rot

  ctx.restore();                   // Laden des vorherigen Zustandes (Zustand 2)
  ctx.fillRect(45, 45, 60, 60);    // Rechteck zeichnen mit den vorherigen Einstellungen
                                   // Hintergrundfarbe grün

  ctx.restore();                   // Laden des vorherigen Zustandes (Zustand 1)
  ctx.fillRect(60, 60, 30, 30);    // Rechteck zeichnen mit Standardeinstellungen
                                   // Hintergrundfarbe schwarz
}
document.addEventListener('DOMContentLoaded', draw);