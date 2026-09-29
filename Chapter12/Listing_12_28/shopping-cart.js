localStorage.setItem('username', 'John Doe');
localStorage.setItem('shoppingCartItemIDs', JSON.stringify(['id22345','id23445','id65464','id74747','id46646']));

showUsername();
showShoppingCart();

function showUsername() {
    const username = localStorage.getItem('username');
    document.getElementById('username').textContent = username;
}

function showShoppingCart() {
    const ids = JSON.parse(localStorage.getItem('shoppingCartItemIDs'));
    const itemsElement = document.getElementById('shopping-cart-items');
    ids.forEach(function (id) {
        const item = catalog[id];
        const itemElement = document.createElement('li');
        itemElement.appendChild(document.createTextNode(item.name));
        itemsElement.appendChild(itemElement);
    });
    document.getElementById('shopping-cart-item-count').textContent = ids.length;
}