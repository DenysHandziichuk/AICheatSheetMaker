import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { generateCheatSheet } from './generateCheatSheet.js'

const app = express()

app.use(cors())
app.use(express.json())

app.post('/cheatsheet', async (req, res) => {
  try {
    console.log("REQ BODY:", req.body)

    const { text, level, length } = req.body 

    if (!text) {
      return res.status(400).json({ error: "Text is required" })
    }

    const result = await generateCheatSheet(
      text,
      level || "academic",
      length || "medium"
    )

    res.json({ result })
  } catch (err) {
    console.error("AI ERROR:", err)
    res.status(500).json({
      error: "AI generation failed",
      details: err.message
    })
  }
})

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001')
})
