function init() {
  let element = document.getElementById('example')
  let event = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });
  element.addEventListener(
    'click',
    (event) => {
      console.log('Element geklickt');
    },
    false
  );
  element.dispatchEvent(event);
}

document.addEventListener('DOMContentLoaded', init);