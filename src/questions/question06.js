const question06 = {
  id: 'q06',
  scenario: `A company created an extract, transform, and load (ETL) data pipeline in AWS Glue. A data engineer must crawl a table that is in Microsoft SQL Server. The data engineer needs to extract, transform, and load the output of the crawl to an Amazon S3 bucket. The data engineer also must orchestrate the data pipeline.
  Which AWS service or feature will meet these requirements MOST cost-effectively?`,
  requirement: '',
  options: [
    { letter: 'A', text: 'AWS Step Functions' },
    { letter: 'B', text: 'AWS Glue workflows' },
    { letter: 'C', text: 'AWS Glue Studio' },
    { letter: 'D', text: 'Amazon Managed Workflows for Apache Airflow (Amazon MWAA)' },
  ],
  answer: 'B',
  explanation: `AWS Glue is designed specifically for ETL on AWS and integrates directly with data sources such as Microsoft SQL Server through connectors. This allows for easier configuration and avoids the need for additional development.`,
}

export default question06
