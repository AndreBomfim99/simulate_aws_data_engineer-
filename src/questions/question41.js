const question41 = {
  id: 'q41',
  scenario: `How can a data engineering team efficiently submit and manage SQL queries against an Amazon Redshift cluster from multiple applications without handling database connections themselves?`,
  options: [
    { letter: 'A', text: 'Use a Glue Job to query Redshift using necessary drivers.' },
    { letter: 'B', text: 'Use Amazon Redshift Data API to execute queries.' },
    { letter: 'C', text: 'Use Redshift Spectrum queries.' },
    { letter: 'D', text: 'Utilize Athena to execute queries.' },
  ],
  answer: 'B',
  explanation: `Amazon Redshift Data API provides a serverless, connectionless interface to submit SQL queries to a Redshift cluster. It eliminates the need to manage database connections, connection pools, and driver configurations, making it easy for multiple applications to execute queries asynchronously and retrieve results without maintaining persistent connections.`,
}

export default question41