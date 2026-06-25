const question50 = {
  id: 'q50',
  scenario: `How can you design an automated AWS serverless solution that efficiently converts .csv files to Apache Parquet format upon their upload to a designated S3 bucket with minimal effort?`,
  options: [
    { letter: 'A', text: 'Write a Lambda function to check for new files on S3 bucket regularly for conversion to Parquet format.' },
    { letter: 'B', text: 'Configure S3 event notification for PUT event for files with csv suffix, trigger Lambda function for Parquet conversion.' },
    { letter: 'C', text: 'Use Amazon EventBridge rule to trigger Lambda function for conversion upon new file upload to S3 bucket.' },
    { letter: 'D', text: 'Setup a policy to convert .csv files to Parquet format upon upload.' },
  ],
  answer: 'B',
  explanation: `Configuring S3 event notification for PUT events with .csv suffix triggers a Lambda function that can convert the CSV to Parquet format. This is serverless, event-driven, and requires minimal operational overhead.`,
}

export default question50