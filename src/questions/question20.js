const question20 = {
  id: 'q20',
  scenario: `A company is migrating on-premises workloads to AWS. The company wants to reduce overall operational overhead. The company also wants to explore serverless options.
  The company's current workloads use Apache Pig, Apache Oozie, Apache Spark, Apache Hbase, and Apache Flink. The on-premises workloads process petabytes of data in seconds. The company must maintain similar or better performance after the migration to AWS.
  Which extract, transform, and load (ETL) service will meet these requirements?`,
  options: [
    { letter: 'A', text: 'AWS Glue' },
    { letter: 'B', text: 'Amazon EMR' },
    { letter: 'C', text: 'AWS Lambda' },
    { letter: 'D', text: 'Amazon Redshift' },
  ],
  answer: 'B',
  explanation: `Glue is like the more good-looking one, but weaker brother of EMR. So when it's about petabyte scales, let EMR do the work and have Glue stay away from the action.`,
}

export default question20