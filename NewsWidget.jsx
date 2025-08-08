import { useEffect, useState } from 'react'
import GlassCard from './GlassCard'
import { fetchNews } from '../utils/api'

export default function NewsWidget(){
  const [state, setState] = useState({ loading:true, error:null, items:[] })

  useEffect(()=>{
    (async ()=>{
      try {
        const items = await fetchNews('javascript')
        setState({ loading:false, error:null, items })
      } catch(e){ setState({ loading:false, error:e.message, items:[] }) }
    })()
  },[])

  return (
    <GlassCard>
      <h3 className="text-lg font-semibold mb-3">Тренды дня (Hacker News)</h3>
      {state.loading && <p>Загрузка…</p>}
      {state.error && <p className="text-rose-300">{state.error}</p>}
      <ul className="space-y-2">
        {state.items.slice(0,5).map(item=> (
          <li key={item.objectID}>
            <a className="underline hover:opacity-80" href={item.url || `https://news.ycombinator.com/item?id=${item.objectID}`} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </GlassCard>
  )
}
