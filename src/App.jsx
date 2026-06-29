import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ScoreProvider } from './context/ScoreContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Theory from './pages/Theory'
import Domain1 from './pages/theory/Domain1'
import Domain2 from './pages/theory/Domain2'
import Domain3 from './pages/theory/Domain3'
import Domain4 from './pages/theory/Domain4'
import Appendix from './pages/theory/Appendix'
import TaskPage from './pages/theory/TaskPage'
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
              <Route path="/theory/domain-1" element={<Domain1 />} />
              <Route path="/theory/domain-2" element={<Domain2 />} />
              <Route path="/theory/domain-3" element={<Domain3 />} />
              <Route path="/theory/domain-4" element={<Domain4 />} />
              <Route path="/theory/appendix" element={<Appendix />} />
              <Route path="/theory/:domain/:task" element={<TaskPage />} />
              <Route path="/simulate" element={<Simulate />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ScoreProvider>
    </ThemeProvider>
  )
}
