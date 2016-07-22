function init() {
  let source = new EventSource('/events');
  source.addEventListener('message', (e) => {
    document.body.innerHTML += e.data + '<br>';
});
}
document.addEventListener('DOMContentLoaded', init);