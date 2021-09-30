function init() {
  const messageContainer = document
    .getElementById('selection');                   // Container für Meldungen
  const order = document.getElementById('order');     // <select>-Element
  // const order = document.forms.orderform.order;    // Alternative
  order.addEventListener('change', updateOrder);    // Listener registrieren

  function updateOrder(event) {
    while (messageContainer.firstChild) {           // Alle Meldungen löschen
      messageContainer.removeChild(
        messageContainer.firstChild
      );
    }
    const options = this.selectedOptions;             // Selektierte Optionen
    for (let i = 0; i < options.length; i++) {      // Für jede Option ...
      const message = options[i].text                 // ... Meldung ...
        + ' (' + options[i].value + ')';            // ... erzeugen ...
      const div = document.createElement('div');      // ... und dem ...
      const optionText = document                     //
        .createTextNode(message);                   //
      div.appendChild(optionText);                  //
      messageContainer.appendChild(div);            // ... Container hinzufügen.
    }
  }
}

document.addEventListener('DOMContentLoaded', init);
