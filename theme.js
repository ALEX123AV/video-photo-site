export function getSystemPrefersDark() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function applyTheme(theme) {
  const root = document.documentElement
  if (theme === 'dark') root.classList.add('dark')
  else root.classList.remove('dark')
}

export function initTheme() {
  const saved = localStorage.getItem('theme')
  const theme = saved || (getSystemPrefersDark() ? 'dark' : 'light')
  applyTheme(theme)
  return theme
}
