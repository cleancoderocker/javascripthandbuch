function setNewsText() {
  var element = document.querySelector('#news li:nth-child(1)');
  element.innerHTML = '<strong>Platten-News:</strong> Neues Album von <em>Tool</em> immer noch nicht erschienen.';
  console.log(element.innerHTML);
}