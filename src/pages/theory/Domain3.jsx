import { Link } from 'react-router-dom'

const tasks = [
  {
    id: 'task-3-1',
    title: 'Task 3.1: Automate data processing',
    icon: '🤖',
    summary: 'EventBridge, Step Functions, Lambda triggers, automated workflows and event-driven architectures.',
  },
  {
    id: 'task-3-2',
    title: 'Task 3.2: Analyze data by using AWS services',
    icon: '📊',
    summary: 'Athena, Redshift, EMR, QuickSight, OpenSearch — choosing the right tool for each analysis need.',
  },
  {
    id: 'task-3-3',
    title: 'Task 3.3: Maintain and monitor data pipelines',
    icon: '📡',
    summary: 'CloudWatch metrics and alarms, AWS Glue job monitoring, pipeline observability and alerting.',
  },
  {
    id: 'task-3-4',
    title: 'Task 3.4: Ensure data quality',
    icon: '✅',
    summary: 'Data validation, AWS Glue DataBrew, data profiling, anomaly detection, quality rules.',
  },
]

export default function Domain3() {
  return (
    <div className="main-content">
      <div className="domain-page-header" style={{ '--domain-color': '#10B981' }}>
        <Link to="/theory" className="breadcrumb">← Back to Theory</Link>
        <div className="domain-page-badge" style={{ background: '#10B981' }}>Domain 3</div>
        <h1 className="page-title">⚙️ Data Operations and Support</h1>
        <p className="page-subtitle">22% of the exam · 4 task statements</p>
      </div>

      <div className="task-grid">
        {tasks.map(task => (
          <Link key={task.id} to={`/theory/domain-3/${task.id}`} className="task-card">
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
