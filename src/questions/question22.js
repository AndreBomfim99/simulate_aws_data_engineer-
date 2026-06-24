const question22 = {
  id: 'q22',
  scenario: `A company maintains multiple extract, transform, and load (ETL) workflows that ingest data from the company's operational databases into an Amazon S3 based data lake. The ETL workflows use AWS Glue and Amazon EMR to process data.
  The company wants to improve the existing architecture to provide automated orchestration and to require minimal manual effort.
  Which solution will meet these requirements with the LEAST operational overhead?`,
  options: [
    { letter: 'A', text: 'AWS Glue workflows' },
    { letter: 'B', text: 'AWS Step Functions tasks' },
    { letter: 'C', text: 'AWS Lambda functions' },
    { letter: 'D', text: 'Amazon Managed Workflows for Apache Airflow (Amazon MWAA) workflows' },
  ],
  answer: 'B',
  explanation: `Glue Workflow only orchestrate crawlers and glue jobs`,
}

export default question22