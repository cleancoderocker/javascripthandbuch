'use strict';
function init() {
  let listItems = document.getElementsByTagName('li');
  for(let i=0; i<listItems.length; i++) {
    listItems[i].innerHTML = '<a href="'
    + listItems[i].textContent + '">'
    + listItems[i].textContent + '</a>';
  }
}
document.addEventListener('DOMContentLoaded', init);