'use strict';
function init() {
  const listItems = document.getElementsByTagName('li');
  for(let i=0; i<listItems.length; i++) {
    const listItem = listItems[i];
    const url = listItem.textContent;
    listItem.textContent = '';
    const link = document.createElement('a');
    link.setAttribute('href', url);
    const linkText = document.createTextNode(url);
    link.appendChild(linkText);
    listItem.appendChild(link);
  }
}
document.addEventListener('DOMContentLoaded', init);