import { useState } from 'react'
import { useScore } from '../context/ScoreContext'

export default function QuestionCard({ question, index }) {
  const { recordAnswer, getAnswer } = useScore()
  const [showSolution, setShowSolution] = useState(false)

  const saved = getAnswer(question.id)
  const isAnswered = !!saved

  const handleSelect = (letter) => {
    if (isAnswered) return
    const isCorrect = letter === question.answer
    recordAnswer(question.id, letter, isCorrect)
  }

  const getOptionClass = (letter) => {
    if (!isAnswered) {
      return 'option-btn'
    }
    if (letter === question.answer) return 'option-btn correct answered'
    if (letter === saved.selected && letter !== question.answer) return 'option-btn wrong answered'
    return 'option-btn answered dimmed'
  }

  return (
    <div className="question-card">
      <div className="question-label">Question #{index + 1}</div>

      <p className="question-text">{question.scenario}</p>

      {question.requirement && (
        <div className="question-requirement">{question.requirement}</div>
      )}

      <div className="options-list">
        {question.options.map(({ letter, text }) => {
          const cls = isAnswered
            ? getOptionClass(letter)
            : saved?.selected === letter
              ? 'option-btn selected-pending'
              : 'option-btn'

          return (
            <button
              key={letter}
              className={cls}
              onClick={() => handleSelect(letter)}
            >
              <span className="option-letter">{letter}</span>
              <span>{text}</span>
              {isAnswered && letter === question.answer && (
                <span className="option-icon">✓</span>
              )}
              {isAnswered && letter === saved?.selected && letter !== question.answer && (
                <span className="option-icon">✗</span>
              )}
            </button>
          )
        })}
      </div>

      <div className="reveal-section">
        {!isAnswered && !showSolution && (
          <p className="no-selection-hint">Select an answer to check it, or reveal the solution directly.</p>
        )}

        {!showSolution ? (
          <button
            className="btn-reveal"
            onClick={() => setShowSolution(true)}
          >
            🔍 Reveal Solution
          </button>
        ) : (
          <div className="solution-box">
            <div className="solution-correct-label">
              ✅ Correct Answer: <strong>{question.answer}</strong>
            </div>
            <p className="solution-explanation">{question.explanation}</p>
          </div>
        )}
      </div>
    </div>
  )
}
