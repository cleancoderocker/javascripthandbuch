createCookie('username', 'Max Mustermann', 7);
createCookie('shoppingCartItemIDs', 'id22345,id23445,id65464,id74747,id46646', 7);

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