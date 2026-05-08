import { motion } from 'framer-motion'

function CallLogItem({ call, active, onClick }) {
  return (
    <motion.button whileHover={{ scale: 1.01 }} onClick={onClick} className={`w-full rounded-2xl border p-3 text-left transition ${active ? 'border-orange-400 bg-orange-50' : 'border-orange-100 bg-white hover:border-orange-200'}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-800">{call.from}</p>
          <p className="text-xs text-zinc-500">to {call.to}</p>
        </div>
        <span className={`rounded-full px-2 py-1 text-xs ${call.status === 'Answered' ? 'bg-orange-100 text-orange-600' : 'bg-zinc-100 text-zinc-500'}`}>{call.status}</span>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
        <p>{call.date} • {call.time}</p>
        <p>{call.duration}</p>
      </div>
      <div className="mt-2 inline-flex rounded-full bg-orange-500/10 px-2 py-1 text-xs text-orange-600">MOS {call.mos}</div>
    </motion.button>
  )
}

export default CallLogItem
