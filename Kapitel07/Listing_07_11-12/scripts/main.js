function init() {
  let messageContainer = document
    .getElementById('selection');                   // Container für Meldungen
  let order = document.getElementById('order');     // <select>-Element
  // let order = document.forms.orderform.order;    // Alternative
  order.addEventListener('change', updateOrder);    // Listener registrieren

  function updateOrder(event) {                     // this ist vom ...
                                                    // ... Typ HTMLSelectElement
    let value = this.value;                         // Der aktuell selektierte Wert
    let index = this.selectedIndex;                 // Index der ausgewählten Option
    let option = this.item(index);                  // Ausgewähltes <option>-Element
    let text = this.item(index).text;               // Text des <option>-Elements
    // value = this.item(index).value               // Enthält auch den Wert
    let message = text + ' (' + value + ')';        // Nachricht erzeugen
    messageContainer.innerText = message;           // Nachricht anzeigen
  }
}

document.addEventListener('DOMContentLoaded', init);
