'use strict';
function init() {
  const listItems = document.getElementsByTagName('li');
  for(let i=0; i<listItems.length; i++) {
    const text = listItems[i].textContent;
    listItems[i].innerHTML = `<a href="${text}">${text}</a>`;
  }
}
document.addEventListener('DOMContentLoaded', init);
