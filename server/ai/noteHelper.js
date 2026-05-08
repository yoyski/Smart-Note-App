import { groq } from "../ai/groq.js";

export const generateNoteFromPrompt = async (instruction) => {
  let text = "";
  try {
    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "system",
          content: `You are the Smart Note App.
Do NOT introduce yourself.
Do NOT mention that you are an AI, assistant, or model.
Respond ONLY with the generated note content.
No greetings. No explanations. No meta text.`,
        },
        { role: "user", content: instruction },
      ],
      temperature: 1,
      max_completion_tokens: 8192,
      top_p: 1,
      reasoning_effort: "medium",
      stop: null,
    });

    text = completion.choices[0].message.content;
    console.log("RAW AI RESPONSE:", text);

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON object found in response");
    return JSON.parse(jsonMatch[0]);

  } catch (err) {
    console.error("noteHelper ERROR:", err.message);
    console.error("RAW TEXT was:", text);
    throw err;
  }
};
