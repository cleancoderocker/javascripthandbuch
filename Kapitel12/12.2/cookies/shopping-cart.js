document.cookie = 'username=Max Mustermann';
document.cookie = 'shoppingCartItemIDs=22345,23445,65464,74747,46646; expires=Fri, 5 Aug 2020 20:44:00 UTC; path=/';

console.log(document.cookie);
console.log(readCookie('shoppingCartItemIDs'));
showUsername();
showShoppingCart();

function showUsername() {
  var username = readCookie('username');
  document.getElementById('username').textContent = username;
}

function showShoppingCart() {
  var ids = readCookie('shoppingCartItemIDs').split(',');
  var itemsElement = document.getElementById('shopping-cart-items');
  ids.forEach(function (id) {
    var item = catalog[id];
    var itemElement = document.createElement('li');
    itemElement.appendChild(document.createTextNode(item.name));
    itemsElement.appendChild(itemElement);
  });
  document.getElementById('shopping-cart-item-count').textContent = ids.length;
}