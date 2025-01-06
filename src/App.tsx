import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import NewNotePage from './pages/NewNotePage'
import NotePage from './pages/NotePage'

export default function App() {
  useEffect(() => {
    // Dark mode'u varsayılan olarak ayarla
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="min-h-screen bg-yt-black text-yt-text">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewNotePage />} />
          <Route path="/notes/:id" element={<NotePage />} />
        </Routes>
      </Router>
    </div>
  )
}
