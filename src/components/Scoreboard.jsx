import { useScore } from '../context/ScoreContext'

export default function Scoreboard({ totalQuestions }) {
  const { stats, reset } = useScore()

  const pct = stats.answered > 0
    ? Math.round((stats.correct / stats.answered) * 100)
    : 0

  const progress = totalQuestions > 0
    ? Math.round((stats.answered / totalQuestions) * 100)
    : 0

  return (
    <div className="scoreboard">
      <div className="scoreboard-info">
        <div className="score-item">
          <div className="score-dot total" />
          <span className="score-label">Total</span>
          <span className="score-value">{totalQuestions}</span>
        </div>
        <div className="score-item">
          <div className="score-dot correct" />
          <span className="score-label">Correct</span>
          <span className="score-value">{stats.correct}</span>
        </div>
        <div className="score-item">
          <div className="score-dot wrong" />
          <span className="score-label">Wrong</span>
          <span className="score-value">{stats.wrong}</span>
        </div>
        {stats.answered > 0 && (
          <span className="score-percent">{pct}% accuracy</span>
        )}
        <div className="score-progress-bar">
          <div
            className="score-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="score-label">{stats.answered}/{totalQuestions} answered</span>
      </div>

      <button className="scoreboard-reset" onClick={reset} title="Reset all answers">
        ↺ Reset
      </button>
    </div>
  )
}
