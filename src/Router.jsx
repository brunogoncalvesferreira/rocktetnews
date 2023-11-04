import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Emails } from './pages/Emails'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/emails" element={<Emails />} />
    </Routes>
  )
}
