function init() {
  // Move browser window by 200 pixels both horizontally and vertically
  window.moveBy(200, 200);
  // Move browser window to position (200, 200)
  window.moveTo(200, 200);
  // Enlarge browser window by 200 pixels in width and height
  window.resizeBy(200, 200);
  // Shrink browser window by 200 pixels in width and height
  window.resizeBy(-200, -200);
  // Move browser content by 200 pixels both horizontally and vertically
  window.scrollBy(200, 200);
  // Move browser content to position (200, 200)
  window.scrollTo(200, 200);
}

document.addEventListener('DOMContentLoaded', init);
