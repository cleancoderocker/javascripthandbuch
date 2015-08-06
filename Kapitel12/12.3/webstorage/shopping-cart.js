localStorage.setItem('username', 'Max Mustermann');
localStorage.setItem('shoppingCartItemIDs', JSON.stringify([22345,23445,65464,74747,46646]));

showUsername();
showShoppingCart();

function showUsername() {
    var username = localStorage.getItem('username');
    document.getElementById('username').textContent = username;
}

function showShoppingCart() {
    var ids = JSON.parse(localStorage.getItem('shoppingCartItemIDs'));
    var itemsElement = document.getElementById('shopping-cart-items');
    ids.forEach(function (id) {
        var item = catalog[id];
        var itemElement = document.createElement('li');
        itemElement.appendChild(document.createTextNode(item.name));
        itemsElement.appendChild(itemElement);
    });
    document.getElementById('shopping-cart-item-count').textContent = ids.length;
}