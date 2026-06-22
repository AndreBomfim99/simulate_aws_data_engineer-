import { createContext, useContext, useState, useCallback } from 'react'

const ScoreContext = createContext()

export function ScoreProvider({ children }) {
  const [answers, setAnswers] = useState({}) // { [questionId]: { selected, correct } }

  const recordAnswer = useCallback((questionId, selected, correct) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { selected, correct }
    }))
  }, [])

  const reset = useCallback(() => setAnswers({}), [])

  const stats = {
    answered: Object.keys(answers).length,
    correct: Object.values(answers).filter(a => a.correct).length,
    wrong: Object.values(answers).filter(a => !a.correct).length,
  }

  const getAnswer = (questionId) => answers[questionId] || null

  return (
    <ScoreContext.Provider value={{ stats, recordAnswer, reset, getAnswer }}>
      {children}
    </ScoreContext.Provider>
  )
}

export const useScore = () => useContext(ScoreContext)
