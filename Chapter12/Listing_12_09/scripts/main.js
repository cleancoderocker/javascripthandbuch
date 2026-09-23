function init() {
  const source = new EventSource('/events');
  source.onmessage = (event) => {
    console.log(event.data);         // sent message
    console.log(event.origin);       // source
    console.log(event.lastEventId);  // ID of the last event sent
  };  
}
document.addEventListener('DOMContentLoaded', init);