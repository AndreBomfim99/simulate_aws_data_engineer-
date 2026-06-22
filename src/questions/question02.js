const question02 = {
  id: 'q02',
  scenario: `A retail company has a customer data hub in an Amazon S3 bucket. Employees from many countries use the data hub to support company-wide analytics. A governance team must ensure that the company's data analysts can access data only for customers who are within the same country as the analysts.`,
  requirement: 'Which solution will meet these requirements with the LEAST operational effort?',
  options: [
    { letter: 'A', text: 'Create a separate table for each country s customer data. Provide access to each analyst based on the country that the analyst serves.' },
    { letter: 'B', text: 'Register the S3 bucket as a data lake location in AWS Lake Formation. Use the Lake Formation row-level security features to enforce the company s access policies.' },
    { letter: 'C', text: 'Move the data to AWS Regions that are close to the countries where the customers are. Provide access to each analyst based on the country that the analyst serves.' },
    { letter: 'D', text: 'Load the data into Amazon Redshift. Create a view for each country. Create separate IAM roles for each country to provide access to data from each country. Assign the appropriate roles to the analysts.' },
  ],
  answer: 'B',
  explanation: `AWS Lake Formation: It's specifically designed for managing data lakes on AWS, providing capabilities for securing and controlling access to data.
Row-Level Security: With Lake Formation, you can define fine-grained access control policies, including row-level security. This means you can enforce policies to restrict access to data based on specific conditions, such as the country associated with each customer.
Least Operational Effort: Once the policies are defined within Lake Formation, they can be centrally managed and applied to the data in the S3 bucket without the need for creating separate tables or views for each country, as in options A, C, and D. This reduces operational overhead and complexity.`,
}

export default question02
