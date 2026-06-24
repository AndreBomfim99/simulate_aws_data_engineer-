const question38 = {
  id: 'q38',
  scenario: `Your company has a large, complex on-premises Oracle database supporting critical business operations. You plan to migrate it to Amazon Aurora PostgreSQL.
  How would you do this migration to minimize downtime and ensure data integrity?`,
  options: [
    { letter: 'A', text: 'Export Oracle Database data as SQL queries, and run them against Amazon Aurora PostgreSQL' },
    { letter: 'B', text: 'Use AWS DataSync to migrate data seamlessly' },
    { letter: 'C', text: 'Write a script to extract data from Oracle and insert into Amazon Aurora PostgreSQL. Run it during non-peak hours' },
    { letter: 'D', text: 'Use AWS Database Migration Service (DMS) to migrate data' },
  ],
  answer: 'D',
  explanation: `AWS Database Migration Service (DMS) is specifically designed for migrating databases to AWS with minimal downtime. It supports homogeneous and heterogeneous migrations (e.g., Oracle to Aurora PostgreSQL) and provides continuous replication, ensuring data integrity and reducing application downtime during the migration process.`,
}

export default question38