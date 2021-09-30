function init() {
  const messageContainer = document
    .getElementById('selection');                   // Container für Meldungen
  const order = document.getElementById('order');     // <select>-Element
  // const order = document.forms.orderform.order;    // Alternative
  order.addEventListener('change', updateOrder);    // Listener registrieren

  function updateOrder(event) {                     // this ist vom ...
                                                    // ... Typ HTMLSelectElement
    const value = this.value;                         // Der aktuell selektierte Wert
    const index = this.selectedIndex;                 // Index der ausgewählten Option
    const option = this.item(index);                  // Ausgewähltes <option>-Element
    const text = this.item(index).text;               // Text des <option>-Elements
    // value = this.item(index).value               // Enthält auch den Wert
    const message = text + ' (' + value + ')';        // Nachricht erzeugen
    messageContainer.innerText = message;           // Nachricht anzeigen
  }
}

document.addEventListener('DOMContentLoaded', init);
