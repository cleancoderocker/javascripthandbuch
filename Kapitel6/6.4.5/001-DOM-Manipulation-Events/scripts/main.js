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
                                                              // ... hinzugefügt ...
  list.addEventListener('DOMNodeInserted', updateCounter);    // ... und der Counter ...
                                                              // ... erhöht.
}

document.addEventListener('DOMContentLoaded', init);
