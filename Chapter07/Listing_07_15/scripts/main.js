function init() {
  const messageContainer = document.getElementById('selection');
  const order = document.getElementById('order');
  const options = [
    { name: 'Pizza Salami', id: 'P001' },
    { name: 'Pizza Margherita', id: 'P002' },
    { name: 'Pizza Tonno', id: 'P003' },
    { name: 'Pizza Mozzarella', id: 'P004' },
    { name: 'Pizza Hawaii', id: 'P005' }
  ];
  for (let i = 0; i < options.length; i++) {
    order.add(
      new Option(         // constructor for <option> elements
        options[i].name,  // text to be displayed
        options[i].id,    // optional value associated with the selection
        false,            // optional specification that sets 
        // the "selected" attribute
        false             // optional specification of whether the value should 
        // be preselected
      )
    );
  }


  function updateOrder(event) {
    while (messageContainer.firstChild) {
      messageContainer.removeChild(messageContainer.firstChild);
    }
    for (var i = 0; i < this.selectedOptions.length; i++) {
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
