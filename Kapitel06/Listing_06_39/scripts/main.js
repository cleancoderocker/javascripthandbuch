function init() {
  const element = document.getElementById('example')
  const event = new CustomEvent('beispiel', {
    detail: {
      firstName: 'Max',
      lastName: 'Mustermann',
      id: 4711
    }
  });
  element.addEventListener(
    'beispiel',
    (event) => {
      console.log('Ereignis ausgelöst');
      console.log(event.type);             // "beispiel"
      console.log(event.detail.firstName); // "Max"
      console.log(event.detail.lastName);  // "Mustermann"
      console.log(event.detail.id);        // 4711
    },
    false
  );
  element.dispatchEvent(event);
}

document.addEventListener('DOMContentLoaded', init);