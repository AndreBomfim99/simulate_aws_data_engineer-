import { Link } from 'react-router-dom'

const tasks = [
  {
    id: 'task-1-1',
    title: 'Task 1.1: Perform data ingestion',
    icon: '📥',
    summary: 'Throughput, latency, streaming vs batch ingestion, replayability, stateful and stateless transactions.',
  },
  {
    id: 'task-1-2',
    title: 'Task 1.2: Transform and process data',
    icon: '⚙️',
    summary: 'ETL pipelines, volume/velocity/variety, Apache Spark, distributed computing, intermediate staging.',
  },
  {
    id: 'task-1-3',
    title: 'Task 1.3: Orchestrate data pipelines',
    icon: '🔀',
    summary: 'Pipeline scheduling, event-driven orchestration, error handling, monitoring and alerting.',
  },
  {
    id: 'task-1-4',
    title: 'Task 1.4: Apply programming concepts',
    icon: '💻',
    summary: 'Continuous integration/delivery, SQL queries, infrastructure as code, distributed computing concepts.',
  },
]

export default function Domain1() {
  return (
    <div className="main-content">
      <div className="domain-page-header" style={{ '--domain-color': '#E8881A' }}>
        <Link to="/theory" className="breadcrumb">← Back to Theory</Link>
        <div className="domain-page-badge" style={{ background: '#E8881A' }}>Domain 1</div>
        <h1 className="page-title">🔄 Data Ingestion and Transformation</h1>
        <p className="page-subtitle">34% of the exam · 4 task statements</p>
      </div>

      <div className="task-grid">
        {tasks.map(task => (
          <Link key={task.id} to={`/theory/domain-1/${task.id}`} className="task-card">
            <div className="task-icon">{task.icon}</div>
            <div className="task-content">
              <h3 className="task-title">{task.title}</h3>
              <p className="task-summary">{task.summary}</p>
            </div>
            <span className="task-arrow">→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
