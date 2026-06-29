import { Link } from 'react-router-dom'

const domains = [
  {
    id: 'domain-1',
    number: '01',
    title: 'Data Ingestion and Transformation',
    color: '#E8881A',
    icon: '🔄',
    weight: '34%',
    tasks: ['Task 1.1: Perform data ingestion', 'Task 1.2: Transform and process data', 'Task 1.3: Orchestrate data pipelines', 'Task 1.4: Apply programming concepts'],
  },
  {
    id: 'domain-2',
    number: '02',
    title: 'Data Store Management',
    color: '#6366F1',
    icon: '🗄️',
    weight: '26%',
    tasks: ['Task 2.1: Choose a data store', 'Task 2.2: Understand data cataloging', 'Task 2.3: Manage the lifecycle of data', 'Task 2.4: Design data models'],
  },
  {
    id: 'domain-3',
    number: '03',
    title: 'Data Operations and Support',
    color: '#10B981',
    icon: '⚙️',
    weight: '22%',
    tasks: ['Task 3.1: Automate data processing', 'Task 3.2: Analyze data by using AWS services', 'Task 3.3: Maintain and monitor data pipelines', 'Task 3.4: Ensure data quality'],
  },
  {
    id: 'domain-4',
    number: '04',
    title: 'Data Security and Governance',
    color: '#EF4444',
    icon: '🔒',
    weight: '18%',
    tasks: ['Task 4.1: Apply authentication mechanisms', 'Task 4.2: Apply authorization mechanisms', 'Task 4.3: Ensure data encryption and masking', 'Task 4.4: Prepare logs for audit'],
  },
  {
    id: 'appendix',
    number: '—',
    title: 'Appendix',
    color: '#8B5CF6',
    icon: '📎',
    weight: null,
    tasks: ['AWS services in scope', 'Out-of-scope services', 'Technologies and concepts'],
  },
]

export default function Theory() {
  return (
    <div className="main-content">
      <div className="page-header">
        <h1 className="page-title">📘 Theory</h1>
        <p className="page-subtitle">
          Study guide organized by exam domains — exactly as defined in the AWS DEA-C01 exam guide.
        </p>
      </div>

      <div className="domain-grid">
        {domains.map(domain => (
          <Link
            key={domain.id}
            to={`/theory/${domain.id}`}
            className="domain-card"
            style={{ '--domain-color': domain.color }}
          >
            <div className="domain-card-top">
              <div className="domain-number" style={{ background: domain.color }}>
                {domain.number}
              </div>
              {domain.weight && (
                <span className="domain-weight">{domain.weight} of exam</span>
              )}
            </div>

            <div className="domain-icon">{domain.icon}</div>
            <h2 className="domain-title">
              {domain.number !== '—' ? `Domain ${domain.number.replace(/^0/, '')}:` : ''} {domain.title}
            </h2>

            <ul className="domain-tasks">
              {domain.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>

            <div className="domain-arrow">Explore →</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
