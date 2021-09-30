function buttonClicked(event) {
  console.log(event.bubbles);           // true
  console.log(event.cancelable);        // true
  console.log(event.currentTarget);     // <input>
  console.log(event.defaultPrevented);  // false
  console.log(event.eventPhase);        // 2
  console.log(event.target);            // <input>
  console.log(event.timeStamp);         // z.B. 1453232649902
  console.log(event.type);              // "click"
  console.log(event.isTrusted);         // true
}

function init() {
  const element = document.getElementById('button');    // Button holen
  element.addEventListener(                           // Event-Listener registrieren
    'click',                                          // Name des Events
    buttonClicked,                                    // Name des Event-Listeners
    false                                             // Ereignisfluss, Details später
  );
}

document.addEventListener('DOMContentLoaded', init);