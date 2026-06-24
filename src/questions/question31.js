const question31 = {
  id: 'q31',
  scenario: `A data engineering team needs to efficiently migrate large datasets from an on-premises file server to Amazon S3 for analysis, while maintaining ongoing synchronization between the two locations. what AWS service can automate this process and ensure data consistency?`,
  options: [
    { letter: 'A', text: 'Write a program to regularly upload files to S3' },
    { letter: 'B', text: 'Use AWS Storage Gateway' },
    { letter: 'C', text: 'Use Amazon S3 Transfer Acceleration' },
    { letter: 'D', text: 'Use AWS DataSync to automate data transfer' },
  ],
  answer: 'D',
  explanation: `AWS DataSync is a managed service that automates and accelerates data transfer between on-premises storage and AWS, supports incremental transfers, and ensures data integrity and consistency.`,
}

export default question31