import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import ollama from 'ollama';

const model = 'llama3.2:1b';

const rl = readline.createInterface({ input, output, prompt: 'You> ' });

async function sendPromptToOllama(prompt) {
  const response = await ollama.generate({
    model,
    prompt,
  });
  return response.response;
}

rl.prompt();

rl.on('line', async (line) => {
  const reply = await sendPromptToOllama(line.trim());
  console.log(`LLM> ${reply}`);
  rl.prompt();
}).on('close', () => {
  console.log('Session ended.');
  process.exit(0);
});
