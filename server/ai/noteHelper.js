import { groq } from "../ai/groq.js";

export const generateNoteFromPrompt = async (instruction) =>  {
  const completion = await groq.chat.completions.create({
    model: "openai/gpt-oss-120b",
    messages: [
      {
        role: "user",
        content: instruction,
      },
    ],
    temperature: 1,
    max_completion_tokens: 8192,
    top_p: 1,
    reasoning_effort: "medium",
    stop: null,
  });

  const text = completion.choices[0].message.content;

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error(`AI returned invalid JSON: ${text}`);
  }
}