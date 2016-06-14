function handler(e) {
  var e = e || window.event;                              // Event holen
  var target = e.target || e.srcElement;                  // Zielelement
  this.classList.toggle('selected');                      // CSS-Klasse
  console.log(                                            // Ausgabe geklicktes ...
    'Geklickt auf Knoten mit ID "' + target.id + '"'      // ... Element.
  );
  console.log(                                            // Ausgabe aktuelles ...
    'Event an Knoten mit ID "' + this.id + '"'            // ... Element.
  );
}
function init() {
  var elements = document.querySelectorAll(               // Alle Elemente ...
    '.level1, ' +                                         // ... der ersten, ...
    '.level2, ' +                                         // ... der zweiten ...
    '.level3'                                             // ... und der dritten ...
  );                                                      // ... Ebene ...
  for(var i=0; i<elements.length; i++) {                  // ... erhalten einen
    elements[i].addEventListener(                         // ... Listener für das ...
      'click',                                            // ... click-Event.
      handler
    );
  }
}
document.addEventListener('DOMContentLoaded', init);
