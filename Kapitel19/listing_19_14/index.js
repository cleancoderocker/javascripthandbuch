import { ChatOllama } from '@langchain/ollama';
import { ChatPromptTemplate } from '@langchain/core/prompts';

const model = new ChatOllama({ model: 'llama3.2:1b' });

const prompt = ChatPromptTemplate.fromMessages([
  ['system', 'Du bist ein hilfreicher Assistent.'],
  ['human', '{input}'],
]);

const chain = prompt.pipe(model);

const result = await chain.invoke({
  input: 'Wie heißt die Hauptstadt von Deutschland?',
});

console.log(result.content); // Ausgabe: Die Hauptstadt von Deutschland ist Berlin.
