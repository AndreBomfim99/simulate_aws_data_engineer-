const question51 = {
  id: 'q51',
  scenario: `A data engineer needs to schedule daily AWS Glue ETL jobs without strict timing requirements. How should the job be configured to minimize costs?`,
  options: [
    { letter: 'A', text: 'Set a long "Job Timeout" for the job.' },
    { letter: 'B', text: 'Convert the ETL job into a Lambda function to save costs.' },
    { letter: 'C', text: 'Choose "Job Delay" option for Glue Job, to run job in non-peak hours.' },
    { letter: 'D', text: 'Run AWS Glue Job under "FLEX" execution class - to use spare compute capacity.' },
  ],
  answer: 'D',
  explanation: `AWS Glue Executuin Classes
                STANDARD: Dedicated Resources, fast start-up, ideal for time-sensitive workloads.
                FLEX: Use spare compute capacity, variable start/run times, cost-effective for non-urgent workloads.`,
}

export default question51