const question12 = {
  id: 'q12',
  scenario: `A manufacturing company collects sensor data from its factory floor to monitor and enhance operational efficiency. The company uses Amazon Kinesis Data Streams to publish the data that the sensors collect to a data stream. Then Amazon Kinesis Data Firehose writes the data to an Amazon S3 bucket.
  The company needs to display a real-time view of operational efficiency on a large screen in the manufacturing facility.
  Which solution will meet these requirements with the LOWEST latency?`,
  options: [
    { letter: 'A', text: 'Use Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) to process the sensor data. Use a connector for Apache Flink to write data to an Amazon Timestream database. Use the Timestream database as a source to create a Grafana dashboard.' },
    { letter: 'B', text: 'Configure the S3 bucket to send a notification to an AWS Lambda function when any new object is created. Use the Lambda function to publish the data to Amazon Aurora. Use Aurora as a source to create an Amazon QuickSight dashboard.' },
    { letter: 'C', text: 'Use Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) to process the sensor data. Create a new Data Firehose delivery stream to publish data directly to an Amazon Timestream database. Use the Timestream database as a source to create an Amazon QuickSight dashboard.' },
    { letter: 'D', text: 'Use AWS Glue bookmarks to read sensor data from the S3 bucket in real time. Publish the data to an Amazon Timestream database. Use the Timestream database as a source to create a Grafana dashboard.' },
  ],
  answer: 'A',
  explanation: `A: Kinesis data stream --> kinesis data analytics (Flink) --> Timestream --> Quicksight/Graphana`,
}

export default question12