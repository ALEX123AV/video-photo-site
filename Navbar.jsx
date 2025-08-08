import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur glass shadow-glass border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight">Vashenko Studio</Link>
        <div className="flex items-center gap-4">
          <NavLink className={({isActive})=>`px-3 py-2 rounded-lg hover:bg-white/10 ${isActive? 'bg-white/10':''}`} to="/">Главная</NavLink>
          <NavLink className={({isActive})=>`px-3 py-2 rounded-lg hover:bg-white/10 ${isActive? 'bg-white/10':''}`} to="/gallery">Галерея</NavLink>
          <NavLink className={({isActive})=>`px-3 py-2 rounded-lg hover:bg-white/10 ${isActive? 'bg-white/10':''}`} to="/about">Обо мне</NavLink>

          <Link to="/playground" className="btn-glass text-sm font-semibold">Заказать съёмку</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}