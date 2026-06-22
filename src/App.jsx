import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ScoreProvider } from './context/ScoreContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Theory from './pages/Theory'
import Simulate from './pages/Simulate'
import './index.css'

export default function App() {
  return (
    <ThemeProvider>
      <ScoreProvider>
        <BrowserRouter>
          <div className="app-layout">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/theory" element={<Theory />} />
              <Route path="/simulate" element={<Simulate />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ScoreProvider>
    </ThemeProvider>
  )
}
