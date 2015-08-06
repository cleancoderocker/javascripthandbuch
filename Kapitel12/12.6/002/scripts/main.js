(function () {
  function handleFileSelection(event) {
    event.stopPropagation();
    event.preventDefault();

    var files = event.dataTransfer.files;                               // Alle ausgewählten Dateien
    var output = '';                                                    // Variable für Ergebnis
    for (var i = 0; i < files.length; i++) {                            // Über alle Dateien iterieren ...
      var file = files[i];                                              // ... jede Datei betrachten ...
      output += '<li>' +                                                // ... und Ergebnis-HTML zusammebauen, bestehend aus:
      '<strong>' + file.name + '</strong>' +                            // Dateiname
      ' (' + (file.type || "n/a") + ') - ' +                            // Dateityp
      file.size + 'bytes, ' +                                           // Dateigröße
      ' geändert am: ' +                                                // Änderungsdatum
      file.lastModifiedDate.toLocaleDateString() +
      '</li>';
    }
    document.getElementById('list').innerHTML = '<ul>' + output + '</ul>';
  }

  function handleDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  var dropTarget = document.getElementById('target');
  dropTarget.addEventListener('dragover', handleDragOver, false);
  dropTarget.addEventListener('drop', handleFileSelection, false);
})();