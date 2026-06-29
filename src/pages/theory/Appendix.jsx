import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'AWS Services in Scope',
    icon: '✅',
    items: [
      'Amazon Athena', 'AWS CloudTrail', 'Amazon CloudWatch', 'AWS Database Migration Service (DMS)',
      'AWS DataSync', 'Amazon DynamoDB', 'Amazon EBS', 'Amazon EC2', 'Amazon ECS', 'Amazon EKS',
      'Amazon EMR', 'Amazon EventBridge', 'AWS Glue', 'AWS Glue DataBrew', 'Amazon Kinesis Data Streams',
      'Amazon Kinesis Data Firehose', 'AWS Lake Formation', 'AWS Lambda', 'Amazon MSK',
      'Amazon OpenSearch Service', 'Amazon RDS', 'Amazon Redshift', 'Amazon S3', 'AWS Step Functions',
      'Amazon VPC', 'AWS IAM', 'AWS KMS', 'Amazon AppFlow', 'Amazon QuickSight',
    ],
  },
  {
    title: 'Out-of-Scope Services',
    icon: '❌',
    items: [
      'Amazon Chime', 'Amazon Connect', 'Amazon WorkSpaces', 'AWS Amplify',
      'Amazon Lex', 'Amazon Polly', 'Amazon Rekognition', 'Amazon Transcribe',
      'Amazon Translate', 'AWS DeepRacer',
    ],
  },
  {
    title: 'Technologies and Concepts',
    icon: '💡',
    items: [
      'Data lake architecture', 'Data mesh', 'Data warehouse vs data lake vs data lakehouse',
      'ETL vs ELT', 'OLAP vs OLTP', 'Apache Spark and PySpark', 'Apache Kafka',
      'Column-oriented storage (Parquet, ORC)', 'Row-oriented storage (CSV, JSON)',
      'Partitioning and bucketing strategies', 'Data compression formats',
      'Streaming vs batch processing', 'Lambda architecture', 'Kappa architecture',
      'Data governance and cataloging', 'Schema evolution', 'Data lineage',
    ],
  },
]

export default function Appendix() {
  return (
    <div className="main-content">
      <div className="domain-page-header" style={{ '--domain-color': '#8B5CF6' }}>
        <Link to="/theory" className="breadcrumb">← Back to Theory</Link>
        <div className="domain-page-badge" style={{ background: '#8B5CF6' }}>Appendix</div>
        <h1 className="page-title">📎 Appendix</h1>
        <p className="page-subtitle">AWS services, out-of-scope topics, and key technologies for DEA-C01</p>
      </div>

      <div className="appendix-grid">
        {sections.map((sec, i) => (
          <div key={i} className="appendix-card">
            <h2 className="appendix-card-title">
              <span>{sec.icon}</span> {sec.title}
            </h2>
            <ul className="appendix-list">
              {sec.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
