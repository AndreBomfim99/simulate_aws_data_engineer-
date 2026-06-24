const question47 = {
  id: 'q47',
  scenario: `How can a data engineer automate the regular ingestion of external stock market data and economic indicators from various external financial dataset providers - into their AWS S3 data lake for subsequent analysis?
  Which AWS service is best suited for this task?`,
  options: [
    { letter: 'A', text: 'Use Amazon AppFlow to fetch and sync data from external data providers into data lake.' },
    { letter: 'B', text: 'Run a scheduled Lambda function to fetch and save data to data lake.' },
    { letter: 'C', text: 'Configure an AWS Data Exchange to subscribe to financial datasets and import them to data lake.' },
    { letter: 'D', text: 'Write a Glue job to fetch and save data to data lake.' },
  ],
  answer: 'C',
  explanation: `AWS Data Exchange is a service that makes it easy to find, subscribe to, and use third-party data in the cloud. It provides a seamless way to integrate external datasets directly into data lakes, with minimal operational overhead compared to building custom ingestion pipelines.`,
}

export default question47