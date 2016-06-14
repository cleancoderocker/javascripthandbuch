'use strict';
function init() {
  setInterval(getNews, 5000);
}

function getNews() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      let result;
      if (xhttp.responseType === 'json') {
        result = xhttp.response;
      } else {
        result = JSON.parse(xhttp.responseText);
      }
      let container = document.getElementById('news-container');
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      for(let i = 0; i < result.length; i++) {
        let newsItem = result[i];
        let div = document.createElement('div');
        div.appendChild(document.createTextNode(newsItem.title));
        container.appendChild(div);
      }
    }
  };
  xhttp.open('GET', 'news.json', true);
  xhttp.responseType = 'json';
  xhttp.send();
}
window.addEventListener('DOMContentLoaded', init);
