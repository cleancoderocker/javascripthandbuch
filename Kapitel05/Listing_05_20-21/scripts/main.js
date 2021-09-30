function init() {

  (function() {
    const allListItemElements = document.getElementsByTagName('li');
    console.log(allListItemElements.length); // Ausgabe: 8
    const subList = document.getElementById('list-2');
    const subListListItems = subList.getElementsByTagName('li');
    console.log(subListListItems.length); // Ausgabe: 4
  })();

}

document.addEventListener('DOMContentLoaded', init);