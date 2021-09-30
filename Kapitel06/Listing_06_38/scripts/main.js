function init() {
  const element = document.getElementById('example')
  const event = new Event(
    'beispiel',            // Typ des Events
    {
      bubbles: true,       // Bubbling erlauben
      cancelable: false    // Standardaktionen können nicht ...
                           // ... verhindert werden.
    });

  element.addEventListener(
    'beispiel',                           // Typ des Events
    (event) => {
      console.log('Ereignis ausgelöst');
      console.log(event.type);            // "beispiel"
    },
    false
  );
  element.dispatchEvent(event);
}

document.addEventListener('DOMContentLoaded', init);