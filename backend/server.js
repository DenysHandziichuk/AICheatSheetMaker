import express from 'express'
import cors from 'cors'
import { generateCheatSheet } from './ai.js'

const app = express()

app.use(cors())
app.use(express.json())

app.post('/cheatsheet', async (req, res) => {
  try {
    const { text, level } = req.body

    if (!text) {
      return res.status(400).json({ error: "Text is required" })
    }

    const result = await generateCheatSheet(text, level)

    res.json({ result })
  } catch (err) {
    console.error("AI ERROR:", err)   // 👈 ADD THIS
    res.status(500).json({
      error: "AI generation failed",
      details: err.message           // 👈 ADD THIS
    })
  }
})

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001')
})
