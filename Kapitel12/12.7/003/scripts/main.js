(function() {
  var target = document.getElementById('target');
  target.addEventListener('dragover', function(event) {
    console.log("dragover");
    event.preventDefault();
    return false;
  });
  target.addEventListener('dragenter', function(event) {
    console.log("dragenter", event);
    event.target.classList.add("dragover");
  });
  function onLeave(event) {
    event.target.classList.remove("dragover");
  }
  target.addEventListener('dragleave', onLeave);
  target.addEventListener('drop', function(event) {
    event.preventDefault();                             // Verhindert, dass die Datei, die auf das Element gezogen wird ...
                                                        // ... vom Browser geöffent wird.
    var file = event.dataTransfer.files[0];             // Hole die Datei aus dem Drag&Drop-Zwischenspeicher
    if(file.type === 'text/plain'){                     // Falls die Datei eine Textdatei ist ...
      var reader = new FileReader();                    // ... erstelle ein FileReader-Objekt ...
      reader.readAsText(file);                          // ... und lese damit die Datei ein.
      reader.addEventListener('load', function(){       // Wenn die Datei fertig eingelesen wurde ...
        event.srcElement.textContent = reader.result;   // ... zeige den Inhalt in dem Zielelement der Drag&Drop-Aktion an.
      }, false);
    }
    onLeave(event);
  });
})();