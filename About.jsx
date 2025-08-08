import GlassCard from '../components/GlassCard'

export default function About(){
  return (
    <div className="space-y-6">
      <GlassCard>
        <h3 className="text-lg font-semibold mb-2">О проекте</h3>
        <p className="opacity-80">Демо для портфолио: показывает стек из React + Tailwind + Framer Motion + Three.js и интеграции с публичными API. Бэкенд на Express эмулирует БД.</p>
      </GlassCard>
      <GlassCard>
        <h3 className="text-lg font-semibold mb-2">Расширение</h3>
        <ul className="list-disc pl-6 opacity-80">
          <li>Подключить реальную БД (Postgres, Mongo)</li>
          <li>Добавить аутентификацию (JWT)</li>
          <li>Перевести виджеты на серверный proxy с кэшированием</li>
        </ul>
      </GlassCard>
    </div>
  )
}
