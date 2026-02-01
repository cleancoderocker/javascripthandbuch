import express from 'express';
import session from 'express-session';
import ollama from 'ollama';

const app = express();
app.use(express.json());

app.use(express.static('public'));

app.use(
  session({
    secret: 't0p_5ecret',
    resave: false,
    saveUninitialized: true,
  })
);

const messages = {};

app.post('/api/messages', async (request, response) => {
  const userMessage = request.body.message;

  if (!messages[request.session.id]) {
    messages[request.session.id] = [];
  }
  messages[request.session.id].push({ role: 'user', content: userMessage });

  const llmResponse = await ollama.chat({
    model: 'llama3.2:1b',
    messages: messages[request.session.id],
    stream: true,
  });

  let assistantResponse = '';
  for await (const chunk of llmResponse) {
    assistantResponse += chunk.message.content;
    response.write(chunk.message.content);
    if (chunk.done) {
      response.end();
    }
  }
  messages[request.session.id].push({
    role: 'assistant',
    content: assistantResponse,
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
