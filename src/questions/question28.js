const question28 = {
  id: 'q28',
  scenario: `A company uses an Amazon QuickSight dashboard to monitor usage of one of the company's applications. The company uses AWS Glue jobs to process data for the dashboard. The company stores the data in a single Amazon S3 bucket. The company adds new data every day.
  A data engineer discovers that dashboard queries are becoming slower over time. The data engineer determines that the root cause of the slowing queries is long-running AWS Glue jobs.
  Which actions should the data engineer take to improve the performance of the AWS Glue jobs? (Choose two.)`,
  options: [
    { letter: 'A', text: 'Partition the data that is in the S3 bucket. Organize the data by year, month, and day.' },
    { letter: 'B', text: 'Increase the AWS Glue instance size by scaling up the worker type.' },
    { letter: 'C', text: 'Convert the AWS Glue schema to the DynamicFrame schema class.' },
    { letter: 'D', text: 'Adjust AWS Glue job scheduling frequency so the jobs run half as many times each day.' },
    { letter: 'E', text: 'Modify the IAM role that grants access to AWS glue to grant access to all S3 features.' },
  ],
  answer: ['A', 'B'],
  explanation: `A. Partition the data that is in the S3 bucket. Organize the data by year, month, and day.
  • Partitioning data in Amazon S3 can significantly improve query performance. By organizing the data by year, month, and day, AWS Glue and Amazon QuickSight can scan only the relevant partitions of data, which reduces the amount of data read and processed. This approach is particularly effective for time-series data, where queries often target specific time ranges.
  B. Increase the AWS Glue instance size by scaling up the worker type.
  • Scaling up the worker type can provide more computational resources to the AWS Glue jobs, enabling them to process data faster. This can be especially beneficial when dealing with large datasets or complex transformations. It’s important to monitor the performance improvements and cost implications of scaling up.`,
}

export default question28