const question34 = {
  id: 'q34',
  scenario: `An eCommerce company stores inventory data in Amazon Aurora database in a private subnet. They've built a Lambda function to manage this data. How can they ensure that this Lambda function can access the Aurora database securely only through the private network? (Choose two)`,
  options: [
    { letter: 'A', text: 'Run the Lambda function within the same VPC as the Aurora DB cluster to enable direct communication.' },
    { letter: 'B', text: 'Run the Lambda function in a public subnet and use a NAT Gateway to route its traffic to the private Aurora DB cluster.' },
    { letter: 'C', text: 'Configure the Aurora DB cluster\'s security group rules to permit incoming connections from the Lambda function\'s security group.' },
    { letter: 'D', text: 'Enable the private DNS name of the Aurora DB cluster endpoint.' },
  ],
  answer: 'AC',
  explanation: `A. Running the Lambda function in the same VPC as the Aurora cluster allows it to access the database via private IPs without traversing the public internet. C. Security group rules must be configured to allow inbound traffic from the Lambda's security group to the Aurora's port, ensuring secure and controlled access within the private network.`,
}

export default question34