// File: shopping-cart.js
createCookie('username', 'John Doe', 7);
createCookie('shoppingCartItemIDs', 'id22345,id23445,id65464,id74747,id46646', 7);

showUsername();
showShoppingCart();

function showUsername() {
  const username = readCookie('username');
  document.getElementById('username').textContent = username;
}

function showShoppingCart() {
  const ids = readCookie('shoppingCartItemIDs').split(',');
  const itemsElement = document.getElementById('shopping-cart-items');
  ids.forEach(function (id) {
    const item = catalog[id];
    const itemElement = document.createElement('li');
    itemElement.appendChild(document.createTextNode(item.name));
    itemsElement.appendChild(itemElement);
  });
  document.getElementById('shopping-cart-item-count').textContent = ids.length;
}
