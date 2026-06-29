import { Link } from 'react-router-dom'

const tasks = [
  {
    id: 'task-4-1',
    title: 'Task 4.1: Apply authentication mechanisms',
    icon: '🔑',
    summary: 'IAM users, roles, policies, identity federation, Cognito, service-to-service authentication.',
  },
  {
    id: 'task-4-2',
    title: 'Task 4.2: Apply authorization mechanisms',
    icon: '🛡️',
    summary: 'Lake Formation permissions, resource-based policies, SCPs, VPC endpoints, least privilege.',
  },
  {
    id: 'task-4-3',
    title: 'Task 4.3: Ensure data encryption and masking',
    icon: '🔐',
    summary: 'Encryption at rest and in transit, KMS, customer-managed keys, data masking strategies.',
  },
  {
    id: 'task-4-4',
    title: 'Task 4.4: Prepare logs for audit',
    icon: '📝',
    summary: 'CloudTrail, S3 access logs, Glue job logs, audit trails, compliance and governance logging.',
  },
]

export default function Domain4() {
  return (
    <div className="main-content">
      <div className="domain-page-header" style={{ '--domain-color': '#EF4444' }}>
        <Link to="/theory" className="breadcrumb">← Back to Theory</Link>
        <div className="domain-page-badge" style={{ background: '#EF4444' }}>Domain 4</div>
        <h1 className="page-title">🔒 Data Security and Governance</h1>
        <p className="page-subtitle">18% of the exam · 4 task statements</p>
      </div>

      <div className="task-grid">
        {tasks.map(task => (
          <Link key={task.id} to={`/theory/domain-4/${task.id}`} className="task-card">
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
