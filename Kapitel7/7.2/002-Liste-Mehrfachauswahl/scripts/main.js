function init() {
  var messageContainer = document
    .getElementById('selection');                   // Container für Meldungen
  var order = document.getElementById('order');     // <select>-Element
  // var order = document.forms.orderform.order;    // Alternative
  order.addEventListener('change', updateOrder);    // Listener registrieren

  function updateOrder(event) {
    while (messageContainer.firstChild) {           // Alle Meldungen löschen
      messageContainer.removeChild(
        messageContainer.firstChild
      );
    }
    var options = this.selectedOptions;             // Selektierte Optionen
    for (var i = 0; i < options.length; i++) {      // Für jede Option ...
      var message = options[i].text                 // ... Meldung ...
        + ' (' + options[i].value + ')';            // ... erzeugen ...
      var div = document.createElement('div');      // ... und dem ...
      var optionText = document                     //
        .createTextNode(message);                   //
      div.appendChild(optionText);                  //
      messageContainer.appendChild(div);            // ... Container hinzufügen.
    }
  }
}

document.addEventListener('DOMContentLoaded', init);
