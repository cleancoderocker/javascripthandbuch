function init() {
  const element = document.getElementById('example')
  const event = new Event(
  'example',             // Type of the event
  {
    bubbles: true,       // Allow bubbling
    cancelable: false    // Default actions cannot ...
                         // ... be prevented.
  });
  element.addEventListener(
    'example',                            // Type of event
    (event) => {
      console.log('Event triggered');
      console.log(event.type);            // "example"
    },
    false
  );
  element.dispatchEvent(event);
}

document.addEventListener('DOMContentLoaded', init);
