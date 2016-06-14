(function() {
  var item = {
    name: 'Schrödinger programmiert Java',
    price: 44.90,
    author: 'Philip Ackermann ',
    isbn: ' 978-3836217408',
    printDescription: function() {
      console.log(this.author + ': ' + this.name);
    }
  }
  for(var property in item) {
    console.log('Name: ' + property);
    console.log('Wert: ' + item[property]);
  }
  // Ausgabe: name, price, author, isbn, printDescription
})();

(function() {
  var item = {
    name: 'Schrödinger programmiert Java',
    price: 44.90,
    author: 'Philip Ackermann ',
    isbn: ' 978-3836217408',
    printDescription: function() {
      console.log(this.author + ': ' + this.name);
    }
  }
  var properties = Object.keys(item);
  for(var i=0; i<properties.length; i++) {
    var property = properties[i];
    console.log('Name: ' + property);
    console.log('Wert: ' + item[property]);
  }
  // Ausgabe: name, price, author, isbn, printDescription
})();