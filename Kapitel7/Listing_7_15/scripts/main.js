function init() {
  var messageContainer = document.getElementById('selection');
  var order = document.getElementById('order');
  var options = [
    {name: 'Pizza Salami', id: 'P001'},
    {name: 'Pizza Margherita', id: 'P002'},
    {name: 'Pizza Tonno', id: 'P003'},
    {name: 'Pizza Mozzarella', id: 'P004'},
    {name: 'Pizza Hawaii', id: 'P005'}
  ];
  for(var i=0; i<options.length; i++) {
    order.add(
      new Option(              // Konstruktor für <option>-Elemente
        options[i].name,       // Text, der angezeigt werden soll
        options[i].id,         // optionaler Wert, der mit der Auswahl verbunden ist
        false,                 // optionale Angabe darüber, ob Wert vorselektiert
        false                  // optionale Angabe darüber, ob Wert vorselektiert
      )
    );
  }
  order.addEventListener('change', updateOrder);

  function updateOrder(event) {
    while (messageContainer.firstChild) {
      messageContainer.removeChild(messageContainer.firstChild);
    }
    for(var i=0; i<this.selectedOptions.length; i++) {
      var text = this.selectedOptions[i].text
        + ' (' + this.selectedOptions[i].value + ')';
      var divElement = document.createElement('div');
      var optionText = document.createTextNode(text);
      divElement.appendChild(optionText);
      messageContainer.appendChild(divElement);
    }
  }
}

document.addEventListener('DOMContentLoaded', init);
