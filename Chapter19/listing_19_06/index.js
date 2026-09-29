const apiURL = 'http://localhost:11434/v1/chat/completions';
const model = 'llama3.2:1b';

document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output');
  const input = document.getElementById('input');
  const button = document.querySelector('button');

  function appendMessage(role, content) {
    const msgDiv = document.createElement('div');
    msgDiv.textContent = `${role}: ${content}`;
    output.appendChild(msgDiv);
    output.scrollTop = output.scrollHeight;
    return msgDiv;
  }

  const messages = [
    { role: 'system', content: 'You are a helpful assistant.' },
  ];

  button.addEventListener('click', async () => {
    const userInput = input.value.trim();

    if (userInput === '') return;

    appendMessage('User', userInput);

    messages.push({ role: 'user', content: userInput });

    const payload = {
      model,
      messages: messages,
      stream: true,
    };

    const res = await fetch(apiURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const reader = res.body.getReader();
    let assistantDiv = appendMessage('Assistant', '');
    let reply = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      const chunk = new TextDecoder().decode(value);

      for (const line of chunk.split('\n')) {
        if (!line.trim()) continue;
        if (line.startsWith('data:')) {
          const jsonStr = line.replace(/^data:\s*/, '');

          if (jsonStr === '[DONE]') break;

          const data = JSON.parse(jsonStr);
          const delta = data.choices?.[0]?.delta?.content || '';
          reply += delta;
          assistantDiv.textContent = `Assistant: ${reply}`;
          output.scrollTop = output.scrollHeight;
        }
      }
    }
    messages.push({ role: 'assistant', content: reply });
    input.value = '';
    input.focus();
  });
});
