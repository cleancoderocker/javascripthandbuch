function init() {
  var element = document.getElementById('home');
  var attribute = document.createAttribute('target');
  attribute.value = '_blank';
  element.setAttributeNode(attribute);
  console.log(element.getAttribute('target'));  // _blank
}

document.addEventListener('DOMContentLoaded', init);
