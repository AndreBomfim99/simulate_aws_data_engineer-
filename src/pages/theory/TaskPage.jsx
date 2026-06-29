import { Link, useParams } from 'react-router-dom'
import { getTask } from '../../theory/index.js'

export default function TaskPage() {
  const { domain, task } = useParams()
  const content = getTask(domain, task)

  if (!content) {
    return (
      <div className="main-content">
        <Link to={`/theory/${domain}`} className="breadcrumb">← Back</Link>
        <div style={{ marginTop: 48, textAlign: 'center', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: 36, marginBottom: 12 }}>🚧</p>
          <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)' }}>Content coming soon</p>
          <p style={{ fontSize: 14, marginTop: 6 }}>This task hasn't been added yet.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="main-content">

      {/* Header */}
      <div className="domain-page-header" style={{ '--domain-color': content.domainColor }}>
        <Link to={`/theory/${content.domain}`} className="breadcrumb">
          ← Back to {content.domainLabel}
        </Link>
        <div className="domain-page-badge" style={{ background: content.domainColor }}>
          {content.domainLabel}
        </div>
        <h1 className="page-title">{content.title}</h1>
      </div>

      {/* KNOWLEDGE OF */}
      <div className="tp-section-label">
        <span>🧠</span> Knowledge of
      </div>

      <div className="tp-knowledge-list">
        {content.knowledge.map((item, i) => (
          <div key={i} className="tp-knowledge-item">
            <div className="tp-knowledge-index">{String(i + 1).padStart(2, '0')}</div>
            <div className="tp-knowledge-body">
              <h3 className="tp-knowledge-topic">{item.topic}</h3>
              <h4 className="tp-knowledge-heading">{item.heading}</h4>

              <div className="tp-row">
                <div className="tp-col">
                  <p className="tp-mini-label">O que é</p>
                  <p className="tp-text">{item.what}</p>
                </div>
                <div className="tp-col">
                  <p className="tp-mini-label">Como funciona</p>
                  <p className="tp-text">{item.how}</p>
                </div>
              </div>

              <div className="tp-chars">
                <p className="tp-mini-label">Características principais</p>
                <ul className="tp-bullet-list">
                  {item.characteristics.map((c, j) => <li key={j}>{c}</li>)}
                </ul>
              </div>

              <div className="tp-diff">
                <p className="tp-mini-label">Como se diferencia</p>
                <p className="tp-text">{item.differentiation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SKILLS IN */}
      <div className="tp-section-label" style={{ marginTop: 48 }}>
        <span>🛠️</span> Skills in
      </div>

      <div className="tp-skills-list">
        {content.skills.map((item, i) => (
          <div key={i} className="tp-skill-item">
            <div className="tp-skill-header">
              <span className="tp-skill-num">{i + 1}</span>
              <h3 className="tp-skill-topic">{item.topic}</h3>
            </div>
            <div className="tp-skill-body">
              <div className="tp-skill-heading">{item.heading}</div>

              <div className="tp-skill-grid">
                <div className="tp-skill-block">
                  <p className="tp-mini-label">🎯 Que problema resolve</p>
                  <p className="tp-text">{item.problem}</p>
                </div>
                <div className="tp-skill-block">
                  <p className="tp-mini-label">❌ Por que não outro serviço</p>
                  <p className="tp-text">{item.whyNot}</p>
                </div>
              </div>

              <div className="tp-keywords-block">
                <p className="tp-mini-label">🔑 Palavras-chave no enunciado</p>
                <p className="tp-keywords-text">{item.keywords}</p>
              </div>

              <div className="tp-scenario-block">
                <p className="tp-mini-label">📝 Cenário típico de prova</p>
                <p className="tp-text">{item.scenario}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
