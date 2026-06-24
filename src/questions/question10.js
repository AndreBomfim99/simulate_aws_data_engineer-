const question10 = {
  id: 'q10',
  scenario: `A data engineer needs to create an AWS Lambda function that converts the format of data from .csv to Apache Parquet. The Lambda function must run only if a user uploads a .csv file to an Amazon S3 bucket.
  Which solution will meet these requirements with the LEAST operational overhead?`,
  requirement: '',
  options: [
    { letter: 'A', text: 'Create an S3 event notification that has an event type of s3:ObjectCreated:*. Use a filter rule to generate notifications only when the suffix includes .csv. Set the Amazon Resource Name (ARN) of the Lambda function as the destination for the event notification.' },
    { letter: 'B', text: 'Create an S3 event notification that has an event type of s3:ObjectTagging:* for objects that have a tag set to .csv. Set the Amazon Resource Name (ARN) of the Lambda function as the destination for the event notification.' },
    { letter: 'C', text: 'Create an S3 event notification that has an event type of s3:*. Use a filter rule to generate notifications only when the suffix includes .csv. Set the Amazon Resource Name (ARN) of the Lambda function as the destination for the event notification.' },
    { letter: 'D', text: 'Create an S3 event notification that has an event type of s3:ObjectCreated:*. Use a filter rule to generate notifications only when the suffix includes .csv. Set an Amazon Simple Notification Service (Amazon SNS) topic as the destination for the event notification. Subscribe the Lambda function to the SNS topic.' },
  ],
  answer: 'A',
  explanation: `This solution directly triggers the Lambda function only when a .csv file is uploaded to the S3 bucket, minimizing unnecessary invocations of the Lambda function. It uses a specific event type (s3:ObjectCreated:*) and a filter rule to ensure that the Lambda function is invoked only for relevant events. Additionally, it directly invokes the Lambda function without the need for additional services like Amazon SNS, reducing operational overhead.`,
}

export default question10
