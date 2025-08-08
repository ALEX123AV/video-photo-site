import { useEffect, useState } from 'react'
import GlassCard from './GlassCard'
import { fetchQuote } from '../utils/api'

export default function QuoteWidget(){
  const [state, setState] = useState({ loading:true, error:null, quote:null })

  useEffect(()=>{
    (async ()=>{
      try { const q = await fetchQuote(); setState({ loading:false, error:null, quote:q }) }
      catch(e){ setState({ loading:false, error:e.message, quote:null }) }
    })()
  },[])

  return (
    <GlassCard>
      <h3 className="text-lg font-semibold mb-2">Цитата дня</h3>
      {state.loading && <p>Загрузка…</p>}
      {state.error && <p className="text-rose-300">{state.error}</p>}
      {state.quote && (
        <blockquote className="italic opacity-90">“{state.quote.content}” — {state.quote.author}</blockquote>
      )}
    </GlassCard>
  )
}
