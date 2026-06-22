import { NavLink, Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { theme, toggle } = useTheme()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <div className="navbar-logo">DE</div>
        <span className="navbar-title">DEA-C01 <span>Study</span></span>
      </Link>

      <div className="navbar-nav">
        <NavLink
          to="/theory"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          📘 Theory
        </NavLink>
        <NavLink
          to="/simulate"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          🧪 Simulate
        </NavLink>
      </div>

      <div className="navbar-actions">
        <button className="theme-toggle" onClick={toggle} title="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  )
}
