'use strict';
function init() {
  let windowReference;
  let linkOpen = document.getElementById('link-open');
  let linkClose = document.getElementById('link-close');
  linkOpen.addEventListener('click', (e) => {
    let url = document.getElementById('url').value;
    windowReference = window.open(
      url,
      'Fenstertitel',
      'width=500,height=500,resizable,scrollbars=yes,status=1'
    );
  });
  linkClose.addEventListener('click', (e) => {
    windowReference.close();
  });
}
document.addEventListener('DOMContentLoaded', init)
