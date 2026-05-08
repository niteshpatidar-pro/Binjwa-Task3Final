import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex max-w-[1600px]">
        <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
