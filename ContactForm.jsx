import { useState } from 'react'
import { sendContact } from '../utils/api'
import GlassCard from './GlassCard'

const initial = { name: '', email: '', message: '' }

export default function ContactForm(){
  const [values, setValues] = useState(initial)
  const [status, setStatus] = useState({ loading: false, ok: null, error: null })

  function onChange(e){
    const { name, value } = e.target
    setValues(v => ({...v, [name]: value}))
  }

  function validate(){
    const errs = {}
    if (!values.name.trim()) errs.name = 'Введите имя'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errs.email = 'Некорректный email'
    if (values.message.trim().length < 10) errs.message = 'Сообщение слишком короткое'
    return errs
  }

  async function onSubmit(e){
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setStatus({loading:false, ok:false, error: 'Исправьте ошибки формы'}); return }

    try {
      setStatus({loading:true, ok:null, error:null})
      await sendContact(values)
      setStatus({loading:false, ok:true, error:null})
      setValues(initial)
    } catch (e) {
      setStatus({loading:false, ok:false, error: e.message})
    }
  }

  return (
    <GlassCard>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Имя</label>
          <input name="name" value={values.name} onChange={onChange} className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Иван" />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input type="email" name="email" value={values.email} onChange={onChange} className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block mb-1">Сообщение</label>
          <textarea name="message" value={values.message} onChange={onChange} rows="4" className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Ваше сообщение..." />
        </div>
        <div className="flex items-center gap-3">
          <button disabled={status.loading} className="btn-glass">
            {status.loading ? 'Отправка…' : 'Отправить'}
          </button>
          {status.ok && <span className="text-emerald-300">Спасибо! Сообщение отправлено.</span>}
          {status.error && <span className="text-rose-300">{status.error}</span>}
        </div>
      </form>
    </GlassCard>
  )
}
