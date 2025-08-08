import ContactForm from '../components/ContactForm'
import GlassCard from '../components/GlassCard'

export default function Playground(){
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <ContactForm />
      <GlassCard>
        <h3 className="text-lg font-semibold mb-2">О дизайне</h3>
        <p className="opacity-80">Glassmorphism достигается полупрозрачными слоями, border‑радиусом, blur и мягкими тенями. Наведение слегка поднимает карточку.</p>
      </GlassCard>
    </div>
  )
}
