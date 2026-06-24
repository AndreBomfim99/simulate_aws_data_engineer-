const question09 = {
  id: 'q09',
  scenario: `A data engineer needs to schedule a workflow that runs a set of AWS Glue jobs every day. The data engineer does not require the Glue jobs to run or finish at a specific time.
  Which solution will run the Glue jobs in the MOST cost-effective way?`,
  requirement: '',
  options: [
    { letter: 'A', text: 'Choose the FLEX execution class in the Glue job properties.' },
    { letter: 'B', text: 'Use the Spot Instance type in Glue job properties.' },
    { letter: 'C', text: 'Choose the STANDARD execution class in the Glue job properties.' },
    { letter: 'D', text: 'Choose the latest version in the GlueVersion field in the Glue job properties.' },
  ],
  answer: 'A',
  explanation: `The FLEX execution class in AWS Glue allows jobs to use idle resources within the Glue service, which can significantly reduce costs compared to the STANDARD execution class. With FLEX, Glue jobs run when resources are available, which is a cost-effective approach for jobs that don't need to be completed within a specific timeframe`,
}

export default question09
