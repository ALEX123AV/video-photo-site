import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRouter from './routes/contact.js'
import { simulateLatency } from './utils/fakeLatency.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/health', (req,res)=> res.json({ ok: true }))
app.use('/api/contact', simulateLatency(300, 800), contactRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> console.log(`API on http://localhost:${PORT}`))
