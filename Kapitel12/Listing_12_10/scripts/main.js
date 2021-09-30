function init() {
  const source = new EventSource('/events');
  source.addEventListener('message', (event) => {
    document.body.innerHTML += `${event.data}<br>`;
});
}
document.addEventListener('DOMContentLoaded', init);