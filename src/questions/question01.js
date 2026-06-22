const question01 = {
  id: 'q01',
  scenario: `A data engineer is configuring an AWS Glue job to read data from an Amazon S3 bucket. The data engineer has set up the necessary AWS Glue connection details and an associated IAM role. However, when the data engineer attempts to run the AWS Glue job, the data engineer receives an error message that indicates that there are problems with the Amazon S3 VPC gateway endpoint.

The data engineer must resolve the error and connect the AWS Glue job to the S3 bucket.`,
  requirement: 'Which solution will meet this requirement?',
  options: [
    { letter: 'A', text: 'Update the AWS Glue security group to allow inbound traffic from the Amazon S3 VPC gateway endpoint.' },
    { letter: 'B', text: 'Configure an S3 bucket policy to explicitly grant the AWS Glue job permissions to access the S3 bucket.' },
    { letter: 'C', text: 'Review the AWS Glue job code to ensure that the AWS Glue connection details include a fully qualified domain name.' },
    { letter: 'D', text: "Verify that the VPC's route table includes inbound and outbound routes for the Amazon S3 VPC gateway endpoint." },
  ],
  answer: 'D',
  explanation: `The VPC route table must include routes for the Amazon S3 VPC gateway endpoint so that traffic between AWS Glue and S3 stays within the AWS network. 
  
Without the correct route table entry, Glue cannot reach the S3 gateway endpoint, which causes the error described. VPC gateway endpoints for S3 work by adding routes to the route table — not by modifying security group inbound rules (gateway endpoints don't have security groups) — so option D is the correct fix.`,
}

export default question01
