const question14 = {
  id: 'q14',
  scenario: `A company loads transaction data for each day into Amazon Redshift tables at the end of each day. The company wants to have the ability to track which tables have been loaded and which tables still need to be loaded.
  A data engineer wants to store the load statuses of Redshift tables in an Amazon DynamoDB table. The data engineer creates an AWS Lambda function to publish the details of the load statuses to DynamoDB.
  How should the data engineer invoke the Lambda function to write load statuses to the DynamoDB table?`,
  options: [
    { letter: 'A', text: 'Use a second Lambda function to invoke the first Lambda function based on Amazon CloudWatch events.' },
    { letter: 'B', text: 'Use the Amazon Redshift Data API to publish an event to Amazon EventBridge. Configure an EventBridge rule to invoke the Lambda function.' },
    { letter: 'C', text: 'Use the Amazon Redshift Data API to publish a message to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the SQS queue to invoke the Lambda function.' },
    { letter: 'D', text: 'Use a second Lambda function to invoke the first Lambda function based on AWS CloudTrail events.' },
  ],
  answer: 'B',
  explanation: `B. Use the Amazon Redshift Data API to publish an event to Amazon EventBridge. Configure an EventBridge rule to invoke the Lambda function.`,
}

export default question14