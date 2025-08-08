import { useEffect, useState } from 'react'
import { applyTheme, initTheme, getSystemPrefersDark } from '../utils/theme'

export default function ThemeToggle(){
  const [theme, setTheme] = useState('light')

  useEffect(()=>{
    setTheme(initTheme())

    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => {
      if (!localStorage.getItem('theme')) {
        const t = e.matches ? 'dark' : 'light'
        setTheme(t); applyTheme(t)
      }
    }
    mql.addEventListener('change', handler)
    return ()=> mql.removeEventListener('change', handler)
  },[])

  function toggle(){
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    applyTheme(next)
  }

  function reset(){
    localStorage.removeItem('theme')
    const t = getSystemPrefersDark() ? 'dark' : 'light'
    setTheme(t); applyTheme(t)
  }

  return (
    <div className="flex items-center gap-2">
      <button onClick={toggle} className="btn-glass text-sm">{theme === 'dark' ? '🌙 Dark' : '☀️ Light'}</button>
      <button onClick={reset} className="text-xs opacity-70 hover:opacity-100 underline">auto</button>
    </div>
  )
}
