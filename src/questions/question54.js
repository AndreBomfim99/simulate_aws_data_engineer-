const question54 = {
  id: 'q54',
  scenario: `A company needs to automate its data processing workflows and orchestrate complex data pipelines using a managed service. They require a solution that integrates well with various AWS data services & custom scripts, while also allowing them to schedule, monitor and manage workflows. Which AWS service is best suited for this requirement?`,
  options: [
    { letter: 'A', text: 'AWS Lambda.' },
    { letter: 'B', text: 'Amazon Managed Workflows for Apache Airflow (MWAA).' },
    { letter: 'C', text: 'AWS Step Functions.' },
    { letter: 'D', text: 'Amazon Kinesis Data Analytics.' },
  ],
  answer: 'B',
  explanation: `Workflow Orchestration Services

                Service 		Key Use Cases
                AWS Glue  		ETL, Preparing/cleaning data
                AWS Step Functions 	Workflow Orchestration of Microservices
                Amazon AppFlow  	Integrating Data from SaaS, CRM etc
                Airflow - MWAA  	Handle complex workflows
`,
}

export default question54