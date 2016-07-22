function init() {
  document.cookie = 'username=Max Mustermann';
  document.cookie = 'shoppingCartItemIDs=22345,23445,65464,74747,46646,; expires=Sa, 31 Dec 2016 23:59:59 UTC; path=/';
  console.log(document.cookie);
}
document.addEventListener('DOMContentLoaded', init);