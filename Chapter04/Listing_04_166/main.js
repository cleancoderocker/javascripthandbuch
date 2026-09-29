'use strict';
const button = {
  handler : null,
  // Function that expects a callback handler
  onClick : function(handler) {
    this.handler = handler;
  },
  click : function() {
    this.handler();
  }
};

const handler = {
  log : function() {
    console.log("Button clicked.");
  },
  // Object method registered as a callback handler further below
  handle: function() {
    this.log();
  }
}
// Register callback handler
const boundFunction = handler.handle.bind(handler);
button.onClick(boundFunction);

// Implicit activation of the callback handler
button.click();
