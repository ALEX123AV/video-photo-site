import { motion } from 'framer-motion'
import ThreeScene from '../components/ThreeScene'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import CTASection from '../components/CTASection'

export default function Home(){
  return (
    <div className="space-y-14">
      <section className="text-center space-y-6">
        <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-extrabold">
          Профессиональная видео- и фотосъёмка мероприятий
        </motion.h1>
        <p className="opacity-80 max-w-2xl mx-auto">
          Детские матчи, праздники, свадьбы, концерты, блоги и фотосессии. Живые кадры, чистый звук и аккуратная цветокоррекция.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a href="/playground" className="btn-glass">Заказать съёмку</a>
          <a href="/gallery" className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10">Смотреть работы</a>
        </div>
        <div className="mt-6">
          <ThreeScene />
        </div>
      </section>

      <Services />
      <Pricing />
      <CTASection />
    </div>
  )
}
