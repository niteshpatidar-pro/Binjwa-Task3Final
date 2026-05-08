import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import VoiceCallLogsPage from './pages/VoiceCallLogsPage'

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<VoiceCallLogsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
