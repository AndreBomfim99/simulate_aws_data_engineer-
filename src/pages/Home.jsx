import { Link } from 'react-router-dom'
import allQuestions from '../questions'

export default function Home() {
  return (
    <div className="main-content">
      <div className="home-hero">
        <div className="home-badge">
          🏅 AWS Certified
        </div>
        <h1 className="home-title">
          Data Engineer<br /><span>Associate</span>
        </h1>
        <p className="home-subtitle">
          Study guide and practice simulator for the <strong>DEA-C01</strong> exam.
          Learn the theory and test your knowledge with real exam-style questions.
        </p>

        <div className="home-cards">
          <Link to="/theory" className="home-card">
            <div className="home-card-icon">📘</div>
            <div className="home-card-title">Theory</div>
            <p className="home-card-desc">
              Concepts, services and key topics covered in the DEA-C01 exam.
            </p>
          </Link>

          <Link to="/simulate" className="home-card">
            <div className="home-card-icon">🧪</div>
            <div className="home-card-title">Simulate</div>
            <p className="home-card-desc">
              {allQuestions.length} practice question{allQuestions.length !== 1 ? 's' : ''} with automatic scoring and solutions.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
