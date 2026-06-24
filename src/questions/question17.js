const question17 = {
  id: 'q17',
  scenario: `A data engineer is building a data pipeline on AWS by using AWS Glue extract, transform, and load (ETL) jobs. The data engineer needs to process data from Amazon RDS and MongoDB, perform transformations, and load the transformed data into Amazon Redshift for analytics. The data updates must occur every hour.
  Which combination of tasks will meet these requirements with the LEAST operational overhead? (Choose two.)`,
  options: [
    { letter: 'A', text: 'Configure AWS Glue triggers to run the ETL jobs every hour.' },
    { letter: 'B', text: 'Use AWS Glue DataBrew to clean and prepare the data for analytics.' },
    { letter: 'C', text: 'Use AWS Lambda functions to schedule and run the ETL jobs every hour.' },
    { letter: 'D', text: 'Use AWS Glue connections to establish connectivity between the data sources and Amazon Redshift.' },
    { letter: 'E', text: 'Use the Redshift Data API to load transformed data into Amazon Redshift.' },
  ],
  answer: ['A', 'D'],
  explanation: `A. Configure AWS Glue triggers to run the ETL jobs every hour.
  Reduced Code Complexity: Glue triggers eliminate the need to write custom code for scheduling ETL jobs. This simplifies the pipeline and reduces maintenance overhead.
  Scalability and Integration: Glue triggers work seamlessly with Glue ETL jobs, ensuring efficient scheduling and execution within the Glue ecosystem.
  D. Use AWS Glue connections to establish connectivity between the data sources and Amazon Redshift.
  Pre-Built Connectors: Glue connections offer pre-built connectors for various data sources like RDS and Redshift. This eliminates the need for manual configuration and simplifies data source access within the ETL jobs.
  Centralized Management: Glue connections are centrally managed within the Glue service, streamlining connection management and reducing operational overhead.`,
}

export default question17