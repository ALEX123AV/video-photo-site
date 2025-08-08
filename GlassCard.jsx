import { motion } from 'framer-motion'
import '../styles/glass.scss'

export default function GlassCard({children, className=''}){
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`glass glass-hover p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}
