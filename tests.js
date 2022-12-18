const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

openai.createCompletion({
  model: "text-davinci-003",
  prompt: "¿Que es una palta?",
  //engine: "text-davinci-003",
  max_tokens: 1024,
  temperature: 0.5,
}).then(completion => {
  for (choice of completion.data.choices){
    console.log(choice.text);
  }
});
