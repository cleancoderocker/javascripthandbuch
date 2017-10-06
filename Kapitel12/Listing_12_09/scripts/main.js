function init() {
  let source = new EventSource('/events');
  source.onmessage = (e) => {
    console.log(e.data);        // gesendete Nachricht
    console.log(e.origin);      // Quelle
    console.log(e.lastEventId); // ID des zuletzt gesendeten Events
  };
}
document.addEventListener('DOMContentLoaded', init);