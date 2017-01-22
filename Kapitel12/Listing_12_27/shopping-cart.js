localStorage.setItem('username', 'Max Mustermann');
localStorage.setItem('shoppingCartItemIDs', JSON.stringify(['id22345','id23445','id65464','id74747','id46646']));

showUsername();
showShoppingCart();

function showUsername() {
    let username = localStorage.getItem('username');
    document.getElementById('username').textContent = username;
}

function showShoppingCart() {
    let ids = JSON.parse(localStorage.getItem('shoppingCartItemIDs'));
    let itemsElement = document.getElementById('shopping-cart-items');
    ids.forEach(function (id) {
        let item = catalog[id];
        let itemElement = document.createElement('li');
        itemElement.appendChild(document.createTextNode(item.name));
        itemsElement.appendChild(itemElement);
    });
    document.getElementById('shopping-cart-item-count').textContent = ids.length;
}