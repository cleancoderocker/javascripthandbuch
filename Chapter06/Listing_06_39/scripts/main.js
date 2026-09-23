function init() {
  const element = document.getElementById('example')
  const event = new CustomEvent('example', {
    detail: {
      firstName: 'John',
      lastName: 'Doe',
      id: 4711
    }
  });
  element.addEventListener(
    'example',
    (event) => {
      console.log('Event triggered');
      console.log(event.type);             // "example"
      console.log(event.detail.firstName); // "John"
      console.log(event.detail.lastName);  // "Doe"
      console.log(event.detail.id);        // 4711
    },
    false
  );
  element.dispatchEvent(event);
}

document.addEventListener('DOMContentLoaded', init);
