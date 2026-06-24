const question07 = {
  id: 'q07',
  scenario: `A financial services company stores financial data in Amazon Redshift. A data engineer wants to run real-time queries on the financial data to support a web-based trading application. The data engineer wants to run the queries from within the trading application.
  Which solution will meet these requirements with the LEAST operational overhead?`,
  requirement: '',
  options: [
    { letter: 'A', text: 'Establish WebSocket connections to Amazon Redshift.' },
    { letter: 'B', text: 'Use the Amazon Redshift Data API.' },
    { letter: 'C', text: 'Set up Java Database Connectivity (JDBC) connections to Amazon Redshift.' },
    { letter: 'D', text: 'Store frequently accessed data in Amazon S3. Use Amazon S3 Select to run the queries.' },
  ],
  answer: 'B',
  explanation: `The Amazon Redshift Data API lets applications run SQL statements directly over HTTPS, without needing persistent connections, VPC access, drivers, or connection pooling.
  It is ideal for web-based applications that need to query Redshift with low operational overhead.`,
}

export default question07
