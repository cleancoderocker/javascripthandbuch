document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output');
  const input = document.getElementById('input');
  const button = document.querySelector('button');

  button.addEventListener('click', async () => {
    const userInput = input.value.trim();

    if (userInput === '') return;

    const userDiv = document.createElement('div');
    userDiv.textContent = `User: ${userInput}`;
    output.appendChild(userDiv);
    output.scrollTop = output.scrollHeight;

    const res = await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userInput }),
    });

    const reader = res.body.getReader();
    let assistantDiv = document.createElement('div');
    assistantDiv.textContent = 'Assistant: ';
    output.appendChild(assistantDiv);

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      const chunk = new TextDecoder().decode(value);

      assistantDiv.textContent += chunk;
    }

    input.value = '';
    input.focus();
  });
});
