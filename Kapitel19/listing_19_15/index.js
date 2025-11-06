import { stdin as input, stdout as output } from 'node:process';
import readline from 'node:readline/promises';
import { ChatOllama } from '@langchain/ollama';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { RunnableWithMessageHistory } from '@langchain/core/runnables';
import { InMemoryChatMessageHistory } from '@langchain/core/chat_history';

const model = new ChatOllama({ model: 'llama3.2:1b' });

const prompt = ChatPromptTemplate.fromMessages([
  ['system', 'Du bist ein hilfreicher Assistent.'],
  ['placeholder', '{chat_history}'],
  ['human', '{input}'],
]);

const chain = prompt.pipe(model);

const messageHistory = new InMemoryChatMessageHistory();

const withMessageHistory = new RunnableWithMessageHistory({
  runnable: chain,
  getMessageHistory() {
    return messageHistory;
  },
  inputMessagesKey: 'input',
  historyMessagesKey: 'chat_history',
});

const rl = readline.createInterface({
  input,
  output,
});

while (true) {
  const input = await rl.question('You> ');

  const result = await withMessageHistory.stream(
    { input },
    {
      configurable: { sessionId: 'cli-chat' },
    }
  );

  output.write('LLM> ');
  for await (const chunk of result) {
    output.write(chunk.content);
  }
  output.write('\n');
}
