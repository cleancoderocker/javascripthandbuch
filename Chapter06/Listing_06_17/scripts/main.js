function buttonClicked(event) {
  console.log(event.bubbles);           // true
  console.log(event.cancelable);        // true
  console.log(event.currentTarget);     // <input>
  console.log(event.defaultPrevented);  // false
  console.log(event.eventPhase);        // 2
  console.log(event.target);            // <input>
  console.log(event.timeStamp);         // e.g., 1453232649902
  console.log(event.type);              // "click"
  console.log(event.isTrusted);         // true
}

function init() {
  const element = document.getElementById('button'); // Get button
  element.addEventListener(                          // Register event listener
    'click',                                         // Name of the event
    buttonClicked,                                   // Name of the event listener
    false                                            // Event flow, details to follow later on
  );
}

document.addEventListener('DOMContentLoaded', init);