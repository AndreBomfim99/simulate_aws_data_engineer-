const question25 = {
  id: 'q25',
  scenario: `A data engineer needs to join data from multiple sources to perform a one-time analysis job. The data is stored in Amazon DynamoDB, Amazon RDS, Amazon Redshift, and Amazon S3.
  Which solution will meet this requirement MOST cost-effectively?`,
  options: [
    { letter: 'A', text: 'Use an Amazon EMR provisioned cluster to read from all sources. Use Apache Spark to join the data and perform the analysis.' },
    { letter: 'B', text: 'Copy the data from DynamoDB, Amazon RDS, and Amazon Redshift into Amazon S3. Run Amazon Athena queries directly on the S3 files.' },
    { letter: 'C', text: 'Use Amazon Athena Federated Query to join the data from all data sources.' },
    { letter: 'D', text: 'Use Redshift Spectrum to query data from DynamoDB, Amazon RDS, and Amazon S3 directly from Redshift.' },
  ],
  answer: 'C',
  explanation: `I would go for C because Federated Query is typical for this porpouse. Besides, we don't need to add/duplicate resources in S3. But I see that, becasuse Athena is more optimized for S3, it can be considered a tricky question, since there can be more trade-offs to consider, such as data governance that are easier if data is centralized in S3 in my opinion.`,
}

export default question25