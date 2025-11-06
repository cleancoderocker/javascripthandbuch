import { stdin as input, stdout as output } from 'node:process';
import readline from 'node:readline/promises';
import { ChatOllama } from '@langchain/ollama';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { RunnableWithMessageHistory } from '@langchain/core/runnables';
import { InMemoryChatMessageHistory } from '@langchain/core/chat_history';
import { tool } from '@langchain/core/tools';
import { z } from 'zod';
import { ToolMessage } from '@langchain/core/messages';

// --- 1. Tool definieren ---
const addTool = tool(
  async ({ a, b }) => {
    return a + b;
  },
  {
    name: 'add',
    description: 'Addiert zwei Zahlen und gibt die Summe zurück.',
    schema: z.object({
      a: z.number(),
      b: z.number(),
    }),
  }
);

const weatherTool = tool(
  async ({ properties: { location } }) => {
    return `Das Wetter in ${location} ist sonnig.`;
  },
  {
    name: 'weather',
    description: 'Gibt das Wetter für einen bestimmten Ort zurück.',
    schema: z.object({
      location: z.string(),
    }),
  }
);

// --- 2. Model mit Tools verbinden ---
const model = new ChatOllama({ model: 'llama3.2:1b' }).bindTools([
  addTool,
  weatherTool,
]);

// --- 3. Prompt ---
const prompt = ChatPromptTemplate.fromMessages([
  [
    'system',
    'Du bist ein hilfreicher Assistent und darfst Tools verwenden, wenn es nötig ist.',
  ],
  ['placeholder', '{chat_history}'],
  ['human', '{input}'],
]);

// --- 4. Chain ---
const chain = prompt.pipe(model);

// --- 5. Message History ---
const messageHistory = new InMemoryChatMessageHistory();

const withMessageHistory = new RunnableWithMessageHistory({
  runnable: chain,
  getMessageHistory() {
    return messageHistory;
  },
  inputMessagesKey: 'input',
  historyMessagesKey: 'chat_history',
});

// --- 6. CLI ---
const rl = readline.createInterface({
  input,
  output,
});

while (true) {
  const inputText = await rl.question('You> ');

  // Erstes Modell-Resultat (kann Tool-Calls enthalten)
  const initialResult = await withMessageHistory.invoke(
    { input: inputText },
    { configurable: { sessionId: 'cli-chat' } }
  );

  if (initialResult.tool_calls && initialResult.tool_calls.length > 0) {
    // Tool Calls ausführen
    for (const toolCall of initialResult.tool_calls) {
      const toolName = toolCall.name;
      const toolArgs = toolCall.args;

      // Tool suchen und ausführen
      const selectedTool = [addTool, weatherTool].find(
        (t) => t.name === toolName
      );

      if (selectedTool) {
        const toolResult = await selectedTool.func(toolArgs);

        await messageHistory.addMessage(
          new ToolMessage({
            role: 'tool',
            name: toolName,
            content: String(toolResult),
          })
        );

        // Tool-Ergebnis zurück ans Modell geben
        const followUp = await withMessageHistory.invoke(
          {
            input: '',
          },
          { configurable: { sessionId: 'cli-chat' } }
        );

        console.log(messageHistory);

        console.log(`LLM> ${followUp.content}`);
      }
    }
  } else {
    // Kein Tool-Call → direkte Antwort ausgeben
    console.log(`LLM> ${initialResult.content}`);
  }
}
