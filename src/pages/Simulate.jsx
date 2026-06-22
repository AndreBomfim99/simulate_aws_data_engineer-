import { useState } from 'react'
import allQuestions from '../questions'
import QuestionCard from '../components/QuestionCard'
import Scoreboard from '../components/Scoreboard'

export default function Simulate() {
  const [current, setCurrent] = useState(0)
  const total = allQuestions.length

  const prev = () => setCurrent(i => Math.max(0, i - 1))
  const next = () => setCurrent(i => Math.min(total - 1, i + 1))

  if (total === 0) {
    return (
      <div className="main-content">
        <div className="page-header">
          <h1 className="page-title">🧪 Simulate</h1>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>
          No questions yet. Add your first question file in <code>src/questions/</code>.
        </p>
      </div>
    )
  }

  const q = allQuestions[current]

  return (
    <div className="main-content">
      <div className="page-header">
        <h1 className="page-title">🧪 Simulate</h1>
        <p className="page-subtitle">
          Select an answer — the system scores automatically. Reveal the solution anytime.
        </p>
      </div>

      <Scoreboard totalQuestions={total} />

      <div className="question-nav">
        <span className="question-counter">
          Question {current + 1} of {total}
        </span>
        <div className="question-nav-buttons">
          <button className="btn-nav" onClick={prev} disabled={current === 0}>
            ← Previous
          </button>
          <button className="btn-nav" onClick={next} disabled={current === total - 1}>
            Next →
          </button>
        </div>
      </div>

      <QuestionCard question={q} index={current} key={q.id} />
    </div>
  )
}
