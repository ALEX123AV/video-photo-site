export function validateContact(req, res, next){
  const { name, email, message } = req.body || {}
  if (!name || !String(name).trim()) return res.status(400).json({ message: 'name is required' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '')) return res.status(400).json({ message: 'email is invalid' })
  if (!message || String(message).trim().length < 10) return res.status(400).json({ message: 'message too short' })
  next()
}
