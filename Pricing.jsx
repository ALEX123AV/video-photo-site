import GlassCard from './GlassCard'

const tiers = [
  { name: 'Базовый', price: 'от 15 000 ₽', features: ['1–2 часа съёмки','Монтаж 1 ролика до 60 сек','Цветокоррекция/звук','Доставка за 48 часов'] },
  { name: 'Стандарт', price: 'от 35 000 ₽', features: ['До 5 часов съёмки','Фильм 3–5 мин + тизер','Запись звука','Доставка за 5 дней'] },
  { name: 'Премиум', price: 'от 60 000 ₽', features: ['Полный день','2 камеры + дрон*','Фильм 7–10 мин + клипы','Персональная цветокоррекция'] },
]

export default function Pricing(){
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Пакеты и стоимость</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map(t=>(
          <GlassCard key={t.name} className="flex flex-col">
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <div className="text-3xl mt-2 mb-3">{t.price}</div>
            <ul className="opacity-90 list-disc pl-5 space-y-1 flex-1">
              {t.features.map(f=> <li key={f}>{f}</li>)}
            </ul>
            <a href="/playground" className="btn-glass mt-4 text-center">Выбрать пакет</a>
            <p className="text-xs opacity-60 mt-2">* Наличие дрона зависит от локации и погодных условий</p>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}