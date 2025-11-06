import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { OpenAI } from 'openai';

const model = 'llama3.2:1b';

const openai = new OpenAI({
  baseURL: 'http://localhost:11434/v1',
  apiKey: 'ollama',
});

const rl = readline.createInterface({ input, output });

while (true) {
  const prompt = await rl.question('You> ');

  const stream = await openai.chat.completions.create({
    model,
    messages: [{ role: 'user', content: prompt }],
    stream: true,
  });

  for await (const chunk of stream) {
    const content = chunk.choices?.[0]?.delta?.content;
    if (content) process.stdout.write(content);
  }
  process.stdout.write('\n');
}
