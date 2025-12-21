import { Groq } from 'groq-sdk'

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY // create .env file with your own API key or hardcode it to get it work
})

export async function generateCheatSheet(text, level = "Grade 10") {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: `
You are a study assistant.

Create a concise cheat sheet for the topic below.
Rules:
- Simple language
- Bullet points
- Exam-focused
- Include definitions
- Include formulas if relevant
- Level: ${level}

Topic / Notes:
${text}
`
        }
      ],
      temperature: 0.7
    })

    return completion.choices[0].message.content
  } catch (err) {
    console.error("GROQ RAW ERROR:", err)
    throw err
  }
}
