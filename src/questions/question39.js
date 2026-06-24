const question39 = {
  id: 'q39',
  scenario: `How can a data engineer efficiently process and optimize large, time-stamped CSV files in an S3 bucket for rapid analysis, while also separating outdated data on a daily basis, using the most cost-effective AWS services?`,
  options: [
    { letter: 'A', text: 'Run a Lambda function daily to partition & convert CSV data into Parquet format.' },
    { letter: 'B', text: 'EMR job to do the partition and conversion to Parquet format.' },
    { letter: 'C', text: 'Athena CTAS query to convert data to Parquet format with Snappy compression, partitioned by state.' },
    { letter: 'D', text: 'Glue job to convert CSV to Parquet format & partition by date.' },
  ],
  answer: 'D',
  explanation: `AWS Glue is a serverless ETL service that can efficiently process large datasets. A Glue job can read CSV files from S3, convert them to columnar Parquet format for faster analytics, and partition the output by date to isolate daily data and reduce query scan costs. This approach is cost-effective (pay per DPU-hour), scales automatically, and can be scheduled to run daily with minimal operational overhead.`,
}

export default question39