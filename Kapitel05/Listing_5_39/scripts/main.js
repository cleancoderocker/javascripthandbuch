function init() {
  let element = document.getElementById('home');
  let attribute = document.createAttribute('target');
  attribute.value = '_blank';
  element.setAttributeNode(attribute);
  console.log(element.getAttribute('target'));  // _blank
}

document.addEventListener('DOMContentLoaded', init);
