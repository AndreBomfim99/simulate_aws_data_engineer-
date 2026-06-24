const question05 = {
  id: 'q05',
  scenario: `A data engineer maintains custom Python scripts that perform a data formatting process that many AWS Lambda functions use. When the data engineer needs to modify the Python scripts, the data engineer must manually update all the Lambda functions.   The data engineer requires a less manual way to update the Lambda functions.
  Which solution will meet this requirement?`,
  requirement: '',
  options: [
    { letter: 'A', text: 'Store a pointer to the custom Python scripts in the execution context object in a shared Amazon S3 bucket.' },
    { letter: 'B', text: 'Package the custom Python scripts into Lambda layers. Apply the Lambda layers to the Lambda functions.' },
    { letter: 'C', text: 'Store a pointer to the custom Python scripts in environment variables in a shared Amazon S3 bucket.' },
    { letter: 'D', text: 'Assign the same alias to each Lambda function. Call reach Lambda function by specifying the function s alias.' },
  ],
  answer: 'B',
  explanation: `B. Package the custom Python scripts into Lambda layers. Apply the Lambda layers to the Lambda functions.
  Explanation:
  Lambda layers allow you to centrally manage shared code and dependencies across multiple Lambda functions. By packaging the custom Python scripts into a Lambda layer, you can simply update the layer whenever changes are made to the scripts, and all the Lambda functions that use the layer will automatically inherit the updates. This approach reduces manual effort and ensures consistency across the functions.`,
}

export default question05
