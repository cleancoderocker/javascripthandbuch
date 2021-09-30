function init() {
  const element = document.getElementById('home');
  const attribute = document.createAttribute('target');
  attribute.value = '_blank';
  element.setAttributeNode(attribute);
  console.log(element.getAttribute('target'));  // _blank
}

document.addEventListener('DOMContentLoaded', init);
