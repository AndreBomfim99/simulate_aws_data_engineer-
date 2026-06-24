const question03 = {
  id: 'q03',
  scenario: `A media company wants to improve a system that recommends media content to customer based on user behavior and preferences. To improve the recommendation system, the company needs to incorporate insights from third-party datasets into the company's existing analytics platform. The company wants to minimize the effort and time required to incorporate third-party datasets.
  Which solution will meet these requirements with the LEAST operational overhead?`,
  requirement: '',
  options: [
    { letter: 'A', text: 'Use API calls to access and integrate third-party datasets from AWS Data Exchange.' },
    { letter: 'B', text: 'Use API calls to access and integrate third-party datasets from AWS DataSync.' },
    { letter: 'C', text: 'Use Amazon Kinesis Data Streams to access and integrate third-party datasets from AWS CodeCommit repositories.' },
    { letter: 'D', text: 'Use Amazon Kinesis Data Streams to access and integrate third-party datasets from Amazon Elastic Container Registry (Amazon ECR).' },
  ],
  answer: 'A',
  explanation: `AWS DataSync is primarily used for data transfer services designed to simplify, automate, and accelerate moving data between on-premises storage systems and AWS storage services, as well as between different AWS storage services. Its primary role is not for accessing third-party datasets but for efficiently transferring large volumes of data.
  In contrast, AWS Data Exchange is designed specifically for discovering and subscribing to third-party data in the cloud, providing direct API access to these datasets, which aligns perfectly with the company's need to integrate this data into their recommendation systems with minimal overhead.`,
}

export default question03
