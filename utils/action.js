import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

export const generateChatResponse = async (message) => {
  const response = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: 'you are a helpful assistant' },
      { role: 'user', content: message }
    ],
    model: 'gpt-3.5-turbo',
    temperature: 0,
  });
  console.log(response.choices[0].message)
  console.log(response);
  return 'awesome';
};