'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const sourceList = document.getElementById('source'); // die Quellliste
  const targetList = document.getElementById('target'); // die Zielliste
  const copyButton = document.getElementById('move'); // die Schaltfläche zum
  // Verschieben
  copyButton.addEventListener('click', function() { // Bei Klick auf die
  // Schaltfläche:
    while(sourceList.hasChildNodes()) { // Solange noch Einträge
  // in der Quellliste sind,
      const item = sourceList.removeChild( // wird der erste Eintrag
        sourceList.firstChild); // aus dieser Liste entfernt
      targetList.appendChild(item); // und zur Zielliste
  // hinzugefügt.
    }
  });
});