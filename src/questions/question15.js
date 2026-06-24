const question15 = {
  id: 'q15',
  scenario: `A data engineer needs to securely transfer 5 TB of data from an on-premises data center to an Amazon S3 bucket. Approximately 5% of the data changes every day. Updates to the data need to be regularly proliferated to the S3 bucket. The data includes files that are in multiple formats. The data engineer needs to automate the transfer process and must schedule the process to run periodically.
  Which AWS service should the data engineer use to transfer the data in the MOST operationally efficient way?`,
  options: [
    { letter: 'A', text: 'AWS DataSync' },
    { letter: 'B', text: 'AWS Glue' },
    { letter: 'C', text: 'AWS Direct Connect' },
    { letter: 'D', text: 'Amazon S3 Transfer Acceleration' },
  ],
  answer: 'A',
  explanation: `AWS DataSync is a managed data transfer service that simplifies and accelerates moving large amounts of data online between on-premises storage and Amazon S3, EFS, or FSx for Windows File Server. DataSync is optimized for efficient, incremental, and reliable transfers of large datasets, making it suitable for transferring 5 TB of data with daily updates.`,
}

export default question15