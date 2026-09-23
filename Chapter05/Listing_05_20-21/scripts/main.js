function init() {

  (function() {
    const allListItemElements = document.getElementsByTagName('li');
    console.log(allListItemElements.length); // Output: 8
    const subList = document.getElementById('list-2');
    const subListListItems = subList.getElementsByTagName('li');
    console.log(subListListItems.length); // Output: 4    
  })();

}

document.addEventListener('DOMContentLoaded', init);