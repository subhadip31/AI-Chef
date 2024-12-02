const { HfInference } = require("@huggingface/inference");

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients and suggests a recipe...`;

const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

exports.handler = async (event) => {
  const { ingredients } = JSON.parse(event.body);
  const ingredientsString = ingredients.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe!`,
        },
      ],
      max_tokens: 1024,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ recipe: response.choices[0].message.content }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
