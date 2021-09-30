function init() {
  const source = new EventSource('/events');
  source.onmessage = (event) => {
    console.log(event.data);        // gesendete Nachricht
    console.log(event.origin);      // Quelle
    console.log(event.lastEventId); // ID des zuletzt gesendeten Events
  };
}
document.addEventListener('DOMContentLoaded', init);