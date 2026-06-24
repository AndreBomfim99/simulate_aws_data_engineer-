const question32 = {
  id: 'q32',
  scenario: `An analytics team is experiencing slow query performance in Amazon Athena due to a large number of S3 partitions in their CSV dataset, which is managed by AWS Glue Data Catalog. They need to optimize query planning and execution to improve overall query speed. 
  How can they achieve this? (Choose Two)`,
  options: [
    { letter: 'A', text: 'Use Athena\'s partition projection for dynamic partitioning based on common query patterns.' },
    { letter: 'B', text: 'Merge and create larger S3 objects using AWS Glue jobs.' },
    { letter: 'C', text: 'Make sure all data files are in Apache Parquet format.' },
    { letter: 'D', text: 'Delete partitions that are not used.' },
  ],
  answer: ['A', 'C'],
  explanation: `A. Athena partition projection allows you to define partition patterns and ranges, reducing the need for partition discovery and improving query planning. C. Apache Parquet is a columnar format that reduces scan size, improves compression, and enables predicate pushdown, significantly speeding up Athena queries.`,
}

export default question32