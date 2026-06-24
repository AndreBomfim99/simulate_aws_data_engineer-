const question16 = {
  id: 'q16',
  scenario: `A company uses an on-premises Microsoft SQL Server database to store financial transaction data. The company migrates the transaction data from the on-premises database to AWS at the end of each month. The company has noticed that the cost to migrate data from the on-premises database to an Amazon RDS for SQL Server database has increased recently.
  The company requires a cost-effective solution to migrate the data to AWS. The solution must cause minimal downtown for the applications that access the database.
  Which AWS service should the company use to meet these requirements?`,
  options: [
    { letter: 'A', text: 'AWS Lambda' },
    { letter: 'B', text: 'AWS Database Migration Service (AWS DMS)' },
    { letter: 'C', text: 'AWS Direct Connect' },
    { letter: 'D', text: 'AWS DataSync' },
  ],
  answer: 'B',
  explanation: `AWS Database Migration Service (DMS) is specifically designed for migrating data from various sources, including on-premises databases, to AWS with minimal downtime and disruption to applications. It supports homogeneous migrations (e.g., SQL Server to SQL Server) as well as heterogeneous migrations (e.g., SQL Server to Amazon RDS for SQL Server).`,
}

export default question16