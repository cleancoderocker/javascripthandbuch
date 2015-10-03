function init() {
  var messageContainer = document
    .getElementById('selection');                   // Container für Meldungen
  var order = document.getElementById('order');     // <select>-Element
  // var order = document.forms.orderform.order;    // Alternative
  order.addEventListener('change', updateOrder);    // Listener registrieren

  function updateOrder(event) {                     // this ist vom ...
                                                    // ... Typ HTMLSelectElement
    var value = this.value;                         // Der aktuell selektierte Wert
    var index = this.selectedIndex;                 // Index der ausgewählten Option
    var option = this.item(index);                  // Ausgewähltes <option>-Element
    var text = this.item(index).text;               // Text des <option>-Elements
    var message = text + ' (' + value + ')';        // Nachricht erzeugen
    messageContainer.innerText = message;           // Nachricht anzeigen
  }
}

document.addEventListener('DOMContentLoaded', init);
