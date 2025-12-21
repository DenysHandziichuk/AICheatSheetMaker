import { buildPrompt } from './promptBuilder.js'
import { getMergedRules } from './rules.js'
import { Groq } from 'groq-sdk'

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

export async function generateCheatSheet(text, level, length) {
  const rules = getMergedRules(level, length)

  // 🔴 ADD THIS TEMPORARILY
  console.log("MERGED RULES:", rules)

  const prompt = buildPrompt(text, level, rules)

  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }],
  })

  return completion.choices[0].message.content
}
