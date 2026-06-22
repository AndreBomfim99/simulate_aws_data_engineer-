import { useState } from 'react'

const topics = [
  {
    id: 'glue',
    icon: '🔄',
    name: 'AWS Glue',
    service: 'Data Integration & ETL',
    sections: [
      {
        heading: 'What is AWS Glue?',
        content: 'AWS Glue is a serverless data integration service that makes it easy to discover, prepare, and combine data for analytics, machine learning, and application development.',
      },
      {
        heading: 'Key Components',
        items: [
          'Data Catalog — central metadata repository for all your data assets',
          'ETL Jobs — Apache Spark-based scripts to transform and move data',
          'Crawlers — automatically scan data sources and populate the Data Catalog',
          'Triggers — start ETL jobs on a schedule or based on events',
          'Workflows — orchestrate complex ETL pipelines',
          'Glue Studio — visual interface to create, run and monitor ETL jobs',
        ],
      },
      {
        heading: 'VPC & Networking',
        content: 'When running Glue jobs inside a VPC, you need a VPC gateway endpoint for S3 and the correct route table entries. Glue jobs connect to S3 via the gateway endpoint — not the public internet — so the route table must contain routes for the endpoint.',
      },
      {
        heading: 'Exam Tags',
        tags: ['ETL', 'Data Catalog', 'Crawler', 'Spark', 'Serverless', 'VPC Endpoint'],
      },
    ],
  },
  {
    id: 'lake-formation',
    icon: '🏞️',
    name: 'AWS Lake Formation',
    service: 'Data Lake Security & Governance',
    sections: [
      {
        heading: 'What is Lake Formation?',
        content: 'AWS Lake Formation is a service that makes it easy to set up, secure, and manage a data lake. It provides fine-grained access control for data stored in S3 and cataloged in the Glue Data Catalog.',
      },
      {
        heading: 'Key Features',
        items: [
          'Fine-grained permissions — control access at database, table, column, and row level',
          'Centralized governance — one place to manage access for all data lake users',
          'Data filters — row and column-level security without query modifications',
          'LF-Tags — attribute-based access control (ABAC) using tags',
          'Cross-account access — share data across AWS accounts securely',
          'Audit logging — track all data access through AWS CloudTrail',
        ],
      },
      {
        heading: 'Permission Model',
        content: 'Lake Formation adds a second layer of permissions on top of IAM. A principal needs BOTH IAM permissions AND Lake Formation permissions to access data. This follows the principle of least privilege by default.',
      },
      {
        heading: 'Exam Tags',
        tags: ['Least Privilege', 'ABAC', 'LF-Tags', 'Fine-grained', 'Governance', 'SELECT'],
      },
    ],
  },
  {
    id: 's3',
    icon: '🪣',
    name: 'Amazon S3',
    service: 'Object Storage',
    sections: [
      {
        heading: 'What is Amazon S3?',
        content: 'Amazon S3 (Simple Storage Service) is an object storage service that offers scalability, data availability, security, and performance. It is the foundation of most AWS data lake architectures.',
      },
      {
        heading: 'Storage Classes',
        items: [
          'S3 Standard — frequently accessed data, high durability and availability',
          'S3 Intelligent-Tiering — automatic tiering based on access patterns',
          'S3 Standard-IA — infrequently accessed, lower cost per GB stored',
          'S3 One Zone-IA — single AZ, lower cost but less resilience',
          'S3 Glacier Instant Retrieval — archive with millisecond access',
          'S3 Glacier Flexible Retrieval — archive, minutes to hours retrieval',
          'S3 Glacier Deep Archive — lowest cost, hours to retrieve',
        ],
      },
      {
        heading: 'Key Features for DEA-C01',
        items: [
          'S3 Lifecycle Policies — automate transitions between storage classes',
          'S3 Versioning — keep multiple versions of objects',
          'S3 Replication (CRR/SRR) — replicate objects across regions or accounts',
          'S3 Event Notifications — trigger Lambda, SQS, SNS on object events',
          'S3 Requester Pays — transfer costs paid by requester',
          'VPC Gateway Endpoint — private access to S3 from within a VPC',
        ],
      },
      {
        heading: 'Exam Tags',
        tags: ['Object Storage', 'Lifecycle', 'Versioning', 'CRR', 'VPC Endpoint', 'Data Lake'],
      },
    ],
  },
  {
    id: 'redshift',
    icon: '🔴',
    name: 'Amazon Redshift',
    service: 'Cloud Data Warehouse',
    sections: [
      {
        heading: 'What is Amazon Redshift?',
        content: 'Amazon Redshift is a fully managed, petabyte-scale cloud data warehouse. It uses columnar storage and massively parallel processing (MPP) to deliver fast query performance on large datasets.',
      },
      {
        heading: 'Key Concepts',
        items: [
          'Leader Node — receives queries, parses them, develops execution plans',
          'Compute Nodes — execute query steps, store data, return results to leader',
          'Distribution Styles — EVEN, KEY, ALL — control how data is distributed',
          'Sort Keys — compound or interleaved — optimize query performance',
          'Redshift Spectrum — query S3 data directly without loading it',
          'Redshift Serverless — automatically provision and scale capacity',
        ],
      },
      {
        heading: 'Loading Data',
        items: [
          'COPY command — load data from S3, EMR, DynamoDB or SSH',
          'INSERT — for small amounts of data',
          'Redshift Data API — run SQL without managing persistent connections',
          'AWS Glue ETL — transform and load data into Redshift',
          'Kinesis Firehose — stream data directly to Redshift',
        ],
      },
      {
        heading: 'Exam Tags',
        tags: ['MPP', 'Columnar', 'Spectrum', 'COPY', 'Distribution', 'Sort Key', 'Serverless'],
      },
    ],
  },
  {
    id: 'kinesis',
    icon: '🌊',
    name: 'Amazon Kinesis',
    service: 'Streaming Data',
    sections: [
      {
        heading: 'Kinesis Services Overview',
        content: 'Amazon Kinesis is a family of services for real-time streaming data. Each service targets a different use case in the streaming data pipeline.',
      },
      {
        heading: 'Kinesis Data Streams (KDS)',
        items: [
          'Custom real-time processing with any consumer (Lambda, KCL, Flink)',
          'Shards — unit of capacity: 1 MB/s write, 2 MB/s read per shard',
          'Retention — 24h default, up to 7 days (extended) or 365 days (long-term)',
          'Enhanced fan-out — dedicated 2 MB/s throughput per consumer',
          'On-demand mode — auto-scales capacity without managing shards',
        ],
      },
      {
        heading: 'Kinesis Data Firehose',
        items: [
          'Fully managed delivery to S3, Redshift, OpenSearch, Splunk, HTTP',
          'No consumers to manage — serverless, auto-scaling',
          'Built-in transformation with Lambda',
          'Buffer size and time configuration for batching',
          'Near real-time (60s minimum buffer or 1 MB)',
        ],
      },
      {
        heading: 'Exam Tags',
        tags: ['Shards', 'KCL', 'Firehose', 'Real-time', 'Streaming', 'Fan-out', 'Retention'],
      },
    ],
  },
]

function TheoryCard({ topic }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="theory-card">
      <div className="theory-card-header" onClick={() => setOpen(o => !o)}>
        <div className="theory-card-left">
          <div className="theory-card-icon">{topic.icon}</div>
          <div>
            <div className="theory-card-name">{topic.name}</div>
            <div className="theory-card-service">{topic.service}</div>
          </div>
        </div>
        <span className={`theory-card-chevron ${open ? 'open' : ''}`}>▼</span>
      </div>

      {open && (
        <div className="theory-card-body">
          {topic.sections.map((sec, i) => (
            <div key={i}>
              <h3>{sec.heading}</h3>
              {sec.content && <p>{sec.content}</p>}
              {sec.items && (
                <ul>
                  {sec.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
              {sec.tags && (
                <div style={{ marginTop: 8 }}>
                  {sec.tags.map(tag => (
                    <span key={tag} className="theory-tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Theory() {
  return (
    <div className="main-content">
      <div className="page-header">
        <h1 className="page-title">📘 Theory</h1>
        <p className="page-subtitle">
          Core services and concepts for the AWS Certified Data Engineer – Associate exam.
          Click any topic to expand it.
        </p>
      </div>

      <div className="theory-grid">
        {topics.map(topic => (
          <TheoryCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  )
}
