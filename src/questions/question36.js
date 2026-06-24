const question36 = {
  id: 'q36',
  scenario: `A data engineer is tasked to efficiently integrate third-party datasets into his company's existing analytics platform to improve content recommendations based on user behavior and preferences.
  How can this be done with minimal operational overhead?`,
  options: [
    { letter: 'A', text: 'Use Amazon Simple Queue Service' },
    { letter: 'B', text: 'Use Amazon Kinesis Data Streams' },
    { letter: 'C', text: 'Use AWS Data Exchange' },
    { letter: 'D', text: 'Use AWS DataSync' },
  ],
  answer: 'C',
  explanation: `AWS Data Exchange is a service that makes it easy for customers to find, subscribe to, and use third-party data in the cloud. It provides a seamless way to integrate external datasets directly into analytics platforms like AWS Glue, Amazon Athena, and Amazon Redshift, with minimal operational overhead compared to building custom ingestion pipelines.`,
}

export default question36