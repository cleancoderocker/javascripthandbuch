(function() {
  var source = document.getElementById('source');
  source.addEventListener('dragstart', function(event) {
    console.log("dragstart");
  });
  source.addEventListener('drag', function(event) {
    console.log("drag");
  });
  source.addEventListener('dragend', function(event) {
    console.log("dragend");
  });
  var target = document.getElementById('target');
  target.addEventListener('dragover', function(event) {
    console.log("dragover");
  });
  target.addEventListener('dragenter', function(event) {
    console.log("dragenter", event);
  });
  target.addEventListener('dragleave', function(event) {
    console.log("dragleave", event);
  });
  target.addEventListener('drop', function(event) {
    console.log("drop", event);
  })
})();