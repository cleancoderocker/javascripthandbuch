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
    updateContent(content.content);
    history.pushState(
      content,                    // Zustandsobjekt
      event.target.textContent,   // Titel
      event.target.href           // URL
    );
    return event.preventDefault();
  }
  // Registrieren der Event-Listener
  const linkElements = document.getElementsByTagName('a');
  for (let i = 0; i < linkElements.length; i++) {
    linkElements[i].addEventListener('click', handleClick, true);
  }

  function updateContent(content) {
    contentElement.textContent = content;
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
    updateContent(event.state.content);
});
}


document.addEventListener('DOMContentLoaded', init);
