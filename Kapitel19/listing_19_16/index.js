import { ChatOllama } from '@langchain/ollama';
import { tool } from '@langchain/core/tools';
import { z } from 'zod';
import { SystemMessage, HumanMessage } from '@langchain/core/messages';

const weatherTool = tool(
  async (location) => {
    return `The weather in ${location} is sunny.`;
  },
  {
    name: 'weather',
    description: 'Returns the weather for a specific location.',
    schema: z.string(),
  }
);

const tools = {
  weather: weatherTool,
};

const model = new ChatOllama({ model: 'llama3.2:1b' });

const llmWithTools = model.bindTools([weatherTool]);

const messages = [
  new SystemMessage(
    'You are a helpful assistant. Use the response of the tool as needed.'
  ),
  new HumanMessage('What is the weather in Munich?'),
];

const aiMessage = await llmWithTools.invoke(messages);

for (const toolCall of aiMessage.tool_calls) {
  const currentTool = tools[toolCall.name];
  if (currentTool) {
    const result = await currentTool.invoke(toolCall);
    messages.push(result);
  }
}

const result = await llmWithTools.invoke(messages);

console.log(result.content);
// Ausgabe z.B.: The current weather in Munich is sunny.
