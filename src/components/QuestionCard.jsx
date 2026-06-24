import { useState } from 'react'
import { useScore } from '../context/ScoreContext'

export default function QuestionCard({ question, index }) {
  const { recordAnswer, getAnswer } = useScore()
  const [showSolution, setShowSolution] = useState(false)
  const [pending, setPending] = useState([]) // for multi-select before submitting

  const saved = getAnswer(question.id)
  const isAnswered = !!saved

  // Normalize answer to always be an array
  const correctAnswers = Array.isArray(question.answer)
    ? question.answer
    : [question.answer]
  const isMulti = correctAnswers.length > 1

  // --- Single select ---
  const handleSingleSelect = (letter) => {
    if (isAnswered) return
    const isCorrect = letter === correctAnswers[0]
    recordAnswer(question.id, [letter], isCorrect)
  }

  // --- Multi select ---
  const togglePending = (letter) => {
    if (isAnswered) return
    setPending(prev =>
      prev.includes(letter)
        ? prev.filter(l => l !== letter)
        : [...prev, letter]
    )
  }

  const submitMulti = () => {
    if (pending.length !== correctAnswers.length) return
    const isCorrect =
      correctAnswers.every(l => pending.includes(l)) &&
      pending.every(l => correctAnswers.includes(l))
    recordAnswer(question.id, pending, isCorrect)
    setPending([])
  }

  const getOptionClass = (letter) => {
    if (!isAnswered) {
      if (isMulti) {
        return pending.includes(letter) ? 'option-btn selected-pending' : 'option-btn'
      }
      return 'option-btn'
    }
    const selected = saved.selected || []
    if (correctAnswers.includes(letter)) return 'option-btn correct answered'
    if (selected.includes(letter) && !correctAnswers.includes(letter)) return 'option-btn wrong answered'
    return 'option-btn answered dimmed'
  }

  const handleClick = (letter) => {
    if (isMulti) togglePending(letter)
    else handleSingleSelect(letter)
  }

  const canSubmit = isMulti && pending.length === correctAnswers.length && !isAnswered

  return (
    <div className="question-card">
      <div className="question-label">
        Question #{index + 1}
        {isMulti && (
          <span className="multi-badge">Choose {correctAnswers.length}</span>
        )}
      </div>

      <p className="question-text">{question.scenario}</p>

      {question.requirement && (
        <div className="question-requirement">{question.requirement}</div>
      )}

      <div className="options-list">
        {question.options.map(({ letter, text }) => {
          const cls = getOptionClass(letter)
          const selected = saved?.selected || []

          return (
            <button
              key={letter}
              className={cls}
              onClick={() => handleClick(letter)}
            >
              <span className="option-letter">{letter}</span>
              <span>{text}</span>
              {isAnswered && correctAnswers.includes(letter) && (
                <span className="option-icon">✓</span>
              )}
              {isAnswered && selected.includes(letter) && !correctAnswers.includes(letter) && (
                <span className="option-icon">✗</span>
              )}
            </button>
          )
        })}
      </div>

      {isMulti && !isAnswered && (
        <div className="multi-submit-row">
          <span className="multi-hint">
            {pending.length}/{correctAnswers.length} selected
          </span>
          <button
            className="btn-submit-multi"
            onClick={submitMulti}
            disabled={!canSubmit}
          >
            ✔ Confirm Answers
          </button>
        </div>
      )}

      <div className="reveal-section">
        {!isAnswered && !showSolution && (
          <p className="no-selection-hint">
            {isMulti
              ? `Select ${correctAnswers.length} answers and confirm, or reveal the solution directly.`
              : 'Select an answer to check it, or reveal the solution directly.'}
          </p>
        )}

        {!showSolution ? (
          <button className="btn-reveal" onClick={() => setShowSolution(true)}>
            🔍 Reveal Solution
          </button>
        ) : (
          <div className="solution-box">
            <div className="solution-correct-label">
              ✅ Correct Answer{correctAnswers.length > 1 ? 's' : ''}: <strong>{correctAnswers.join(', ')}</strong>
            </div>
            <p className="solution-explanation">{question.explanation}</p>
          </div>
        )}
      </div>
    </div>
  )
}
