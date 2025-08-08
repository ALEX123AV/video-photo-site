import GlassCard from './GlassCard'

const items = [
  { title: 'Детские матчи', text: 'Съёмка игры + динамичные хайлайты, нарезка лучших моментов.' },
  { title: 'Праздники', text: 'Лёгкая режиссура, живые эмоции, быстрый монтаж для соцсетей.' },
  { title: 'Свадьбы', text: 'Классический фильм + клип 3–5 мин. Два оператора по запросу.' },
  { title: 'Концерты', text: 'Мультикамерная запись, чистый звук с пульта, синхрон.' },
  { title: 'Блоги', text: 'Помощь со сценарием, b-roll, цвет, звук. Версии для Reels/TikTok.' },
  { title: 'Фотосессии', text: 'Портреты, love-story, репортаж. Быстрая обработка и выгрузка.' },
]

export default function Services(){
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Услуги</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((i)=>(
          <GlassCard key={i.title}>
            <h3 className="text-lg font-semibold mb-1">{i.title}</h3>
            <p className="opacity-80">{i.text}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}