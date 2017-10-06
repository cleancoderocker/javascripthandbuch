'use strict';
function init() {
  let listItems = document.getElementsByTagName('li');
  for(let i=0; i<listItems.length; i++) {
    let listItem = listItems[i];
    let url = listItem.textContent;
    listItem.textContent = '';
    let link = document.createElement('a');
    link.setAttribute('href', url);
    let linkText = document.createTextNode(url);
    link.appendChild(linkText);
    listItem.appendChild(link);
  }
}
document.addEventListener('DOMContentLoaded', init);