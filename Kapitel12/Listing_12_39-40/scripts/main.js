'use strict';
function init() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    function handleFileSelected(event) {
      const files = event.target.files;                 // alle ausgewählten Dateien
      console.log(files);
      let output = '';                                  // Variable für Ergebnis
      for (let i = 0; i < files.length; i++) {          // Über alle Dateien iterieren ...
        const file = files[i];                          // ... jede Datei betrachten ...
        output += '<li>' +                              // ... und Ergebnis-HTML zusammebauen, bestehend aus:
        '<strong>' + file.name + '</strong>' +          // Dateiname
        ' (' + (file.type || "n/a") + ') - ' +          // Dateityp
        file.size + ' Bytes, ' +                        // Dateigröße
        ' geändert am: ' +                              // Änderungsdatum
        file.lastModifiedDate.toLocaleDateString() +    
        '</li>';
      }
      document.getElementById('list').innerHTML = '<ul>' + output + '</ul>';
    }
    document.getElementById('files').addEventListener('change', handleFileSelected, false);
  } else {
    alert('File API nicht vollständig durch den Browser unterstützt');
  }
}
document.addEventListener('DOMContentLoaded', init);