const question19 = {
  id: 'q19',
  scenario: `A data engineer must orchestrate a series of Amazon Athena queries that will run every day. Each query can run for more than 15 minutes.
  Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)`,
  options: [
    { letter: 'A', text: 'Use an AWS Lambda function and the Athena Boto3 client start_query_execution API call to invoke the Athena queries programmatically.' },
    { letter: 'B', text: 'Create an AWS Step Functions workflow and add two states. Add the first state before the Lambda function. Configure the second state as a Wait state to periodically check whether the Athena query has finished using the Athena Boto3 get_query_execution API call. Configure the workflow to invoke the next query when the current query has finished running.' },
    { letter: 'C', text: 'Use an AWS Glue Python shell job and the Athena Boto3 client start_query_execution API call to invoke the Athena queries programmatically.' },
    { letter: 'D', text: 'Use an AWS Glue Python shell script to run a sleep timer that checks every 5 minutes to determine whether the current Athena query has finished running successfully. Configure the Python shell script to invoke the next query when the current query has finished running.' },
    { letter: 'E', text: 'Use Amazon Managed Workflows for Apache Airflow (Amazon MWAA) to orchestrate the Athena queries in AWS Batch.' },
  ],
  answer: ['A', 'B'],
  explanation: `AWS Lambda can be effectively used to trigger Athena queries. By using the start_query_execution API from the Athena Boto3 client, you can programmatically start Athena queries. Lambda functions are cost-effective as they charge based on the compute time used, and there's no charge when the code is not running. However, Lambda has a maximum execution timeout of 15 minutes, which means it's not suitable for long-running operations but can be used to trigger or start queries.
  AWS Step Functions can orchestrate multiple AWS services in workflows. By using a Wait state, the workflow can periodically check the status of the Athena query, and proceed to the next step once the query is complete. This approach is more scalable and reliable compared to continuously running a Lambda function, as Step Functions can handle long-running processes better and can maintain the state of each step in the workflow.`,
}

export default question19