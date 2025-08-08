import { Router } from 'express'
import { messages } from '../db/memory.js'
import { validateContact } from '../middleware/validateContact.js'

const router = Router()

router.post('/', validateContact, (req,res)=>{
  const { name, email, message } = req.body
  const id = String(Date.now())
  const record = { id, name, email, message, createdAt: new Date().toISOString() }
  messages.push(record)
  res.status(201).json({ ok: true, id })
})

router.get('/', (req,res)=>{
  res.json({ ok:true, items: messages })
})

export default router
