const NEWS_BASE = import.meta.env.VITE_NEWS_API_BASE || 'https://hn.algolia.com/api/v1'
const WEATHER_BASE = import.meta.env.VITE_WEATHER_API_BASE || 'https://api.open-meteo.com/v1'
const QUOTE_BASE = import.meta.env.VITE_QUOTE_API_BASE || 'https://api.quotable.io'

export async function fetchQuote() {
  const res = await fetch(`${QUOTE_BASE}/random`)
  if (!res.ok) throw new Error('Failed to fetch quote')
  return res.json()
}

export async function fetchNews(query = 'web') {
  const url = `${NEWS_BASE}/search?query=${encodeURIComponent(query)}&tags=story&hitsPerPage=5`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch news')
  const data = await res.json()
  return data.hits || []
}

export async function fetchWeatherByCoords(lat, lon) {
  const url = `${WEATHER_BASE}/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch weather')
  return res.json()
}

export async function sendContact(payload) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data?.message || 'Failed to send')
  return data
}
