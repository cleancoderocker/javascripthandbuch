'use strict'
const os = require('os');
document.addEventListener('DOMContentLoaded', () => {
  const platform = os.platform();
  document.getElementById('platform').textContent = platform;
});
