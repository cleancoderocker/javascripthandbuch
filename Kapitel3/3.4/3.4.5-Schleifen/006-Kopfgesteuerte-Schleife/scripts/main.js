(function () {
  var sourceList = document.getElementById('source');  // Die Quellliste
  var targetList = document.getElementById('target');  // Die Zielliste
  var copyButton = document.getElementById('move');    // Die Schaltfläche zum Verschieben
  copyButton.addEventListener('click', function() {    // Bei Klick auf die Schaltfläche:
    while(sourceList.hasChildNodes()) {                // solange noch Einträge
                                                       // in der Quellliste sind
      var item = sourceList.removeChild(               // wird der erste Eintrag
        sourceList.firstChild);                        // aus dieser Liste entfernt
      targetList.appendChild(item);                    // und zur Zielliste hinzugefügt.
    }
  });

})();