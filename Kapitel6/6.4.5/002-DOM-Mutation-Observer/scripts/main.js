function init() {
  var list = document.getElementById('todos');                // Listenelement
  var input = document.getElementById('todo');                // Eingabeelement
  var button = document.getElementById('add-todo');           // Schaltfläche
  var counter = document.getElementById('counter');           // Zähler

  function updateCounter() {                                  // Zähler aktualisieren
    counter.textContent = list
      .getElementsByTagName('li').length;
  }

  function addTodo() {                                        // Todo hinzufügen
    var newListElement = document.createElement('li');        // Neues Listenelement
    var newTextNode = document.createTextNode(input.value);   // Text definieren ...
    newListElement.appendChild(newTextNode);                  // ... und hinzufügen.
    list.appendChild(newListElement);
  }

  button.addEventListener('click', addTodo);                  // Bei Klick wird der ...
                                                              // ... Liste ein ...
                                                              // ... neues Element ...
                                                              // ... hinzugefügt.

  var observer = new MutationObserver(
    function(mutations) {
      mutations.forEach(function(mutation) {
        updateCounter();
      });
  });

  var config = {                // Konfigurationsobjekt um ...
    attributes: true,           // ... (1) Änderungen an Attributen zu beobachten.
    childList: true,            // ... (2) Änderungen an Kindelementen zu beobachten.
    characterData: true         // ... (3) Änderungen an Daten zu beobachten.
  };
  observer.observe(
    list,                       // Element, welches beobachtet werden soll.
    config                      // Konfigurationsobjekt
  );
}

document.addEventListener('DOMContentLoaded', init);
