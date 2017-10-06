'use strict';
document.addEventListener('DOMContentLoaded', () => {
  let sourceList = document.getElementById('source'); // die Quellliste
  let targetList = document.getElementById('target'); // die Zielliste
  let copyButton = document.getElementById('move'); // die Schaltfläche zum
  // Verschieben
  copyButton.addEventListener('click', function() { // Bei Klick auf die
  // Schaltfläche:
    while(sourceList.hasChildNodes()) { // Solange noch Einträge
  // in der Quellliste sind,
      let item = sourceList.removeChild( // wird der erste Eintrag
        sourceList.firstChild); // aus dieser Liste entfernt
      targetList.appendChild(item); // und zur Zielliste
  // hinzugefügt.
    }
  });
});