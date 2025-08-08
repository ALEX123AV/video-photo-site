import { useEffect, useState } from 'react'
import GlassCard from './GlassCard'
import { fetchWeatherByCoords } from '../utils/api'

export default function WeatherWidget(){
  const [state, setState] = useState({ loading:true, error:null, data:null })

  useEffect(()=>{
    if (!('geolocation' in navigator)) {
      setState({ loading:false, error:'Геолокация недоступна', data:null })
      return
    }
    navigator.geolocation.getCurrentPosition(async (pos)=>{
      try {
        const { latitude, longitude } = pos.coords
        const data = await fetchWeatherByCoords(latitude, longitude)
        setState({ loading:false, error:null, data })
      } catch (e) { setState({ loading:false, error: e.message, data:null }) }
    }, ()=> setState({ loading:false, error:'Не удалось получить доступ к геолокации', data:null }))
  },[])

  if (state.loading) return <GlassCard>Загрузка погоды…</GlassCard>
  if (state.error) return <GlassCard>Ошибка: {state.error}</GlassCard>

  const cw = state.data?.current_weather

  return (
    <GlassCard>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Погода рядом</h3>
          <p className="text-sm opacity-80">{cw?.temperature}°C, ветер {cw?.windspeed} км/ч</p>
        </div>
        <div className="text-4xl">{cw?.temperature > 20 ? '😎' : '🧥'}</div>
      </div>
    </GlassCard>
  )
}
