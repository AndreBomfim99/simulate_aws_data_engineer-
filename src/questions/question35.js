const question35 = {
  id: 'q35',
  scenario: `A data engineer needs to create a simple, fully managed AWS-based system to automate the execution of an AWS Lambda function followed by an AWS Glue ETL job. What is the most efficient way to do this?`,
  options: [
    { letter: 'A', text: 'Setup AWS Batch job workflow to execute lambda function as a job & then execute Glue job.' },
    { letter: 'B', text: 'Use AWS Step functions to execute lambda function followed by glue job.' },
    { letter: 'C', text: 'Use CodePipeline to run Lambda function and Glue job in stages.' },
    { letter: 'D', text: 'Configure Amazon EventBridge to trigger Lambda function followed by a Glue job.' },
  ],
  answer: 'B',
  explanation: `AWS Step Functions is a fully managed service that allows you to orchestrate serverless workflows, including sequential execution of AWS Lambda functions and AWS Glue jobs, with built-in error handling and state management. It is the simplest and most efficient option for this use case.`,
}

export default question35