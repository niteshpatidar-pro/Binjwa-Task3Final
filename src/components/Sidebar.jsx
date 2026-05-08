import { AnimatePresence, motion } from 'framer-motion'
import { AppWindow, ChevronLeft, FileAudio, LayoutGrid, Menu, Phone, ScrollText } from 'lucide-react'

const menuItems = [
  { label: 'Overview', icon: LayoutGrid },
  { label: 'Applications', icon: AppWindow },
  { label: 'Endpoints', icon: Phone },
  { label: 'Logs', icon: ScrollText, children: ['Call Logs', 'Recordings'] },
]

function Sidebar({ mobileOpen, setMobileOpen }) {
  const content = (
    <div className="glass flex h-full flex-col gap-3 rounded-3xl p-4">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-500">Voice Console</p>
          <h1 className="text-lg font-semibold text-zinc-800">Binjwa</h1>
        </div>
        <button className="md:hidden" onClick={() => setMobileOpen(false)}>
          <ChevronLeft className="text-orange-500" />
        </button>
      </div>
      {menuItems.map((item) => {
        const Icon = item.icon
        const active = item.label === 'Logs'
        return (
          <div key={item.label} className="relative">
            <motion.button
              whileHover={{ x: 4 }}
              className={`w-full rounded-2xl px-3 py-2 text-left ${active ? 'bg-orange-100/90 text-orange-600' : 'text-zinc-700 hover:bg-orange-50'}`}
            >
              <span className="flex items-center gap-2">
                <Icon size={17} />
                {item.label}
              </span>
            </motion.button>
            {active && <motion.div layoutId="activeMenu" className="absolute top-2 bottom-2 left-0 w-1 rounded-r-full bg-orange-500" />}
            {item.children && (
              <div className="mt-2 space-y-1 pl-8 text-sm">
                {item.children.map((child) => (
                  <div key={child} className={child === 'Call Logs' ? 'rounded-xl bg-orange-500 px-3 py-1.5 text-white' : 'rounded-xl px-3 py-1.5 text-zinc-500 hover:bg-orange-50'}>
                    {child === 'Recordings' && <FileAudio size={14} className="mr-1 inline" />}
                    {child}
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )

  return (
    <>
      <button onClick={() => setMobileOpen(true)} className="fixed top-4 left-4 z-40 rounded-xl bg-orange-500 p-2 text-white shadow-lg md:hidden">
        <Menu />
      </button>
      <aside className="hidden w-72 p-4 md:block">{content}</aside>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -320 }} transition={{ duration: 0.3 }} className="fixed inset-y-0 left-0 z-50 w-72 bg-white p-4 md:hidden">
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Sidebar
