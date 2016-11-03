function init() {
  // Browserfenster um 200 Pixel horizontal und vertikal verschieben
  window.moveBy(200, 200);
  // Browserfenster zur Position (200, 200) verschieben
  window.moveTo(200, 200);
  // Browserfenster um 200 Pixel in Breite und Höhe vergrößern
  window.resizeBy(200, 200);
  // Browserfenster um 200 Pixel in Breite und Höhe verkleinern
  window.resizeBy(-200, -200);
  // Browserinhalt um 200 Pixel horizontal und vertikal verschieben
  window.scrollBy(200, 200);
  // Browserinhalt zur Position (200, 200) verschieben
  window.scrollTo(200, 200);
}

document.addEventListener('DOMContentLoaded', init);
