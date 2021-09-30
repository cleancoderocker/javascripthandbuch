function init() {
  // Containerelement für den Inhalt
  const contentElement = document.getElementById('content');
  // Beispielinhalte, normalerweise per Ajax laden
  const contents = {
      home: {
        content: 'Startseite'
      },
      services: {
        content: 'Dienste'
      },
      skills: {
        content: 'Skills'
      },
      aboutus: {
        content: 'Über Uns'
      },
      contact: {
        content: 'Kontakt'
      }
    };
  // Event-Listener für die Links
  function handleClick(event) {
    const pageName = event.target.getAttribute('href').split('/').pop();
    const content = contents[pageName];
    contentElement.textContent = data.content;
    history.pushState(
      content,
      event.target.textContent,
      event.target.href
    );
    return event.preventDefault();
  }
  // Registrieren der Event-Listener
  const linkElements = document.getElementsByTagName('a');
  for (let i = 0; i < linkElements.length; i++) {
    linkElements[i].addEventListener('click', handleClick, true);
  }

  // Initialer Zustand
  history.replaceState(
    {
      content: contentElement.textContent
    },
    document.title,
    document.location.href
  );

  window.addEventListener('popstate', (event) => {
    contentElement.textContent = data.content;
  });

}

document.addEventListener('DOMContentLoaded', init);