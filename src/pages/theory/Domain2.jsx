import { Link } from 'react-router-dom'

const tasks = [
  {
    id: 'task-2-1',
    title: 'Task 2.1: Choose a data store',
    icon: '🗃️',
    summary: 'Storage platforms, use cases for S3, Redshift, DynamoDB, RDS, Aurora, OpenSearch and others.',
  },
  {
    id: 'task-2-2',
    title: 'Task 2.2: Understand data cataloging',
    icon: '📋',
    summary: 'Metadata management, AWS Glue Data Catalog, Lake Formation, schema registry, data discovery.',
  },
  {
    id: 'task-2-3',
    title: 'Task 2.3: Manage the lifecycle of data',
    icon: '♻️',
    summary: 'Data retention, S3 lifecycle policies, archiving, hot/warm/cold tiers, expiration rules.',
  },
  {
    id: 'task-2-4',
    title: 'Task 2.4: Design data models',
    icon: '📐',
    summary: 'Schemas, normalization, denormalization, star/snowflake schemas, NoSQL data modeling.',
  },
]

export default function Domain2() {
  return (
    <div className="main-content">
      <div className="domain-page-header" style={{ '--domain-color': '#6366F1' }}>
        <Link to="/theory" className="breadcrumb">← Back to Theory</Link>
        <div className="domain-page-badge" style={{ background: '#6366F1' }}>Domain 2</div>
        <h1 className="page-title">🗄️ Data Store Management</h1>
        <p className="page-subtitle">26% of the exam · 4 task statements</p>
      </div>

      <div className="task-grid">
        {tasks.map(task => (
          <Link key={task.id} to={`/theory/domain-2/${task.id}`} className="task-card">
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
