'use strict';
function init() {
  const items = document.getElementsByClassName('contact');
  for(let i=0; i<items.length; i++) {
    const item = items[i];
    item.addEventListener('dragstart', function(event) {
      event.dataTransfer.setData('text/html', event.target.outerHTML);
    });
  }
  const target = document.getElementById('target');
  target.addEventListener('dragover', function(event) {
    event.preventDefault();
    return false;
  });
  target.addEventListener('dragenter', function(event) {
    event.target.classList.add('dragover');
  });
  function onLeave(event) {
    event.target.classList.remove("dragover");
  }
  target.addEventListener('dragleave', onLeave);
  target.addEventListener('drop', function(event) {
    if(event.target.id === 'target') {                                        // Stellt sicher, dass das Ziel auch wirklich das gedachte Ziel ist
      event.srcElement.innerHTML += event.dataTransfer.getData('text/html');
	  event.srcElement.addEventListener('dragstart', function(event) {
		console.log('drag')
		console.log(event.srcElement.parentNode)
	  });
    }
    onLeave(event);
  })
}
document.addEventListener('DOMContentLoaded', init);