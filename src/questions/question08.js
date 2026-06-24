const question08 = {
  id: 'q08',
  scenario: `A company uses Amazon Athena for one-time queries against data that is in Amazon S3. The company has several use cases. The company must implement permission controls to separate query processes and access to query history among users, teams, and applications that are in the same AWS account.
  Which solution will meet these requirements?`,
  requirement: '',
  options: [
    { letter: 'A', text: 'Create an S3 bucket for each use case. Create an S3 bucket policy that grants permissions to appropriate individual IAM users. Apply the S3 bucket policy to the S3 bucket.' },
    { letter: 'B', text: 'Create an Athena workgroup for each use case. Apply tags to the workgroup. Create an IAM policy that uses the tags to apply appropriate permissions to the workgroup.' },
    { letter: 'C', text: 'Create an IAM role for each use case. Assign appropriate permissions to the role for each use case. Associate the role with Athena.' },
    { letter: 'D', text: 'Create an AWS Glue Data Catalog resource policy that grants permissions to appropriate individual IAM users for each use case. Apply the resource policy to the specific tables that Athena uses.' },
  ],
  answer: 'B',
  explanation: `Athena workgroups allow you to isolate and manage different workloads, users, and permissions. By creating a separate workgroup for each use case, you can control access to query history, manage permissions, and enforce resource usage limits independently for each workload. Applying tags to workgroups allows you to categorize and organize them based on the use case, which simplifies policy management.`,
}

export default question08
