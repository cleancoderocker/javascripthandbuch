function init() {
  const messageContainer = document
    .getElementById('selection');                   // Container für Meldungen
  const orderForm = document
      .getElementById('orderform');                 // Formular
  // const order = document.forms.orderform.order;    // Alternative
  const radioButtons = orderForm.order;
  for(let i=0; i<radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', function(e) {
      console.log(e.target.value);                  // z.B. "P002"
      console.log(this.value);                      // z.B. "P002"
      messageContainer.innerText = this.value;      // Nachricht anzeigen
    });
  }
}

document.addEventListener('DOMContentLoaded', init);
