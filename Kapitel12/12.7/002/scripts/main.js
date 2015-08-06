(function() {
  var items = document.getElementsByClassName('contact');
  for(var i=0; i<items.length; i++) {
    var item = items[i];
    item.addEventListener('dragstart', function(event) {
      event.dataTransfer.setData('text/html', event.target.outerHTML);
    });
  }
  var target = document.getElementById('target');
  target.addEventListener('dragover', function(event) {
    event.preventDefault();
    return false;
  });
  target.addEventListener('dragenter', function(event) {
    event.target.classList.add("dragover");
  });
  function onLeave(event) {
    event.target.classList.remove("dragover");
  }
  target.addEventListener('dragleave', onLeave);
  target.addEventListener('drop', function(event) {
    if(event.target.id === 'target') {                                        // Stellt sicher, dass das Ziel auch wirklich das gedachte Ziel ist
      event.srcElement.innerHTML += event.dataTransfer.getData('text/html');
    }
    onLeave(event);
  })
})();