(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    function handleFileSelect(event) {
      var files = event.target.files;                   // Alle ausgewählten Dateien
      var output = '';                                  // Variable für Ergebnis
      for (var i = 0; i < files.length; i++) {          // Über alle Dateien iterieren ...
      var file = files[i];                              // ... jede Datei betrachten ...
        output += '<li>' +                              // ... und Ergebnis-HTML zusammebauen, bestehend aus:
          '<strong>' + file.name + '</strong>' +        // Dateiname
          ' (' + (file.type || "n/a") + ') - ' +        // Dateityp
          file.size + 'bytes, ' +                       // Dategröße
          ' geändert am: ' +                            // Änderungsdatum
          file.lastModifiedDate.toLocaleDateString() +  //
          '</li>';
      }
      document.getElementById('list').innerHTML = '<ul>' + output + '</ul>';
    }
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
  } else {
    alert('File API nicht vollständig durch den Browser unterstützt');
  }
})();