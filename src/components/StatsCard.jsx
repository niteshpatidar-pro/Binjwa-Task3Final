import { motion } from 'framer-motion'
import useCountUp from '../hooks/useCountUp'

function StatsCard({ stat }) {
  const count = useCountUp(stat.value)
  const value = stat.decimals ? count.toFixed(stat.decimals) : Math.round(count).toLocaleString()
  const Icon = stat.icon

  return (
    <motion.div whileHover={{ y: -5 }} className="glass card-glow rounded-2xl p-4">
      <div className="flex items-center justify-between text-zinc-500">
        <p className="text-sm">{stat.label}</p>
        <motion.div animate={{ rotate: [0, 8, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="rounded-xl bg-orange-100 p-2 text-orange-500">
          <Icon size={16} />
        </motion.div>
      </div>
      <p className="mt-3 text-2xl font-semibold text-zinc-800">{stat.prefix}{value}{stat.suffix}</p>
    </motion.div>
  )
}

export default StatsCard
