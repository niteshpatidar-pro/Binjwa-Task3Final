import { motion } from 'framer-motion'

const tabs = ['Call Details', 'Transcript', 'Recording', 'More']

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="relative flex gap-2 overflow-x-auto border-b border-orange-100 pb-2">
      {tabs.map((tab) => (
        <button key={tab} onClick={() => setActiveTab(tab)} className={`relative rounded-xl px-3 py-2 text-sm whitespace-nowrap ${activeTab === tab ? 'text-orange-600' : 'text-zinc-500'}`}>
          {tab}
          {activeTab === tab && <motion.span layoutId="tabUnderline" className="absolute right-2 bottom-0 left-2 h-0.5 rounded bg-orange-500" />}
        </button>
      ))}
    </div>
  )
}

export default Tabs
