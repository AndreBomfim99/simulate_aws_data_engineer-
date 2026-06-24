const question04 = {
  id: 'q04',
  scenario: `A financial company wants to implement a data mesh. The data mesh must support centralized data governance, data analysis, and data access control. The company has decided to use AWS Glue for data catalogs and extract, transform, and load (ETL) operations.

Which combination of AWS services will implement a data mesh? (Choose two.)`,
  requirement: '',
  options: [
    { letter: 'A', text: 'Use Amazon Aurora for data storage. Use an Amazon Redshift provisioned cluster for data analysis.' },
    { letter: 'B', text: 'Use Amazon S3 for data storage. Use Amazon Athena for data analysis.' },
    { letter: 'C', text: 'Use AWS Glue DataBrew for centralized data governance and access control.' },
    { letter: 'D', text: 'Use Amazon RDS for data storage. Use Amazon EMR for data analysis.' },
    { letter: 'E', text: 'Use AWS Lake Formation for centralized data governance and access control.' },
  ],
  answer: ['B', 'E'], // Array for multi-select questions
  explanation: `The data mesh implementation uses Amazon S3 and Athena for data storage and analysis (B), and AWS Lake Formation for centralized data governance and access control (E). When combined with AWS Glue for ETL and cataloging, these services form a complete, serverless data mesh architecture on AWS.

Lake Formation provides the centralized governance layer — managing permissions, data filters, and access control at scale — while S3 + Athena give a cost-effective, serverless way to store and query data without provisioning infrastructure.`,
}

export default question04
