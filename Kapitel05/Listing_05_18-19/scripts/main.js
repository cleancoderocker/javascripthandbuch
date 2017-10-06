function init() {

  (function() {
    let allListItemElements = document.getElementsByTagName('li');
    console.log(allListItemElements.length); // Ausgabe: 8
    let subList = document.getElementById('list-2');
    let subListListItems = subList.getElementsByTagName('li');
    console.log(subListListItems.length); // Ausgabe: 4
  })();

}

document.addEventListener('DOMContentLoaded', init);