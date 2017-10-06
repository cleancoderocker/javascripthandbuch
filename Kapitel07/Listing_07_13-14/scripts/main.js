function init() {
  let messageContainer = document
    .getElementById('selection');                   // Container für Meldungen
  let order = document.getElementById('order');     // <select>-Element
  // let order = document.forms.orderform.order;    // Alternative
  order.addEventListener('change', updateOrder);    // Listener registrieren

  function updateOrder(event) {
    while (messageContainer.firstChild) {           // Alle Meldungen löschen
      messageContainer.removeChild(
        messageContainer.firstChild
      );
    }
    let options = this.selectedOptions;             // Selektierte Optionen
    for (let i = 0; i < options.length; i++) {      // Für jede Option ...
      let message = options[i].text                 // ... Meldung ...
        + ' (' + options[i].value + ')';            // ... erzeugen ...
      let div = document.createElement('div');      // ... und dem ...
      let optionText = document                     //
        .createTextNode(message);                   //
      div.appendChild(optionText);                  //
      messageContainer.appendChild(div);            // ... Container hinzufügen.
    }
  }
}

document.addEventListener('DOMContentLoaded', init);
