const question13 = {
  id: 'q13',
  scenario: `A company stores daily records of the financial performance of investment portfolios in .csv format in an Amazon S3 bucket. A data engineer uses AWS Glue crawlers to crawl the S3 data.
  The data engineer must make the S3 data accessible daily in the AWS Glue Data Catalog.
  Which solution will meet these requirements?`,
  options: [
    { letter: 'A', text: 'Create an IAM role that includes the AmazonS3FullAccess policy. Associate the role with the crawler. Specify the S3 bucket path of the source data as the crawler\'s data store. Create a daily schedule to run the crawler. Configure the output destination to a new path in the existing S3 bucket.' },
    { letter: 'B', text: 'Create an IAM role that includes the AWSGlueServiceRole policy. Associate the role with the crawler. Specify the S3 bucket path of the source data as the crawler\'s data store. Create a daily schedule to run the crawler. Specify a database name for the output.' },
    { letter: 'C', text: 'Create an IAM role that includes the AmazonS3FullAccess policy. Associate the role with the crawler. Specify the S3 bucket path of the source data as the crawler\'s data store. Allocate data processing units (DPUs) to run the crawler every day. Specify a database name for the output.' },
    { letter: 'D', text: 'Create an IAM role that includes the AWSGlueServiceRole policy. Associate the role with the crawler. Specify the S3 bucket path of the source data as the crawler\'s data store. Allocate data processing units (DPUs) to run the crawler every day. Configure the output destination to a new path in the existing S3 bucket.' },
  ],
  answer: 'B',
  explanation: `B. Create an IAM role that includes the AWSGlueServiceRole policy. Associate the role with the crawler. Specify the S3 bucket path of the source data as the crawler's data store. Create a daily schedule to run the crawler. Specify a database name for the output.`,
}

export default question13