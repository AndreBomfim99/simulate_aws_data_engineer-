const question45 = {
  id: 'q45',
  scenario: `A team is tasked with managing and querying a dynamic customer transaction dataset stored in Amazon S3. They utilize Amazon Athena for data querying but require an automated solution to adapt to the evolving data structure. Which AWS service can effectively manage the dataset's schema and seamlessly integrate with Athena for up-to-date query results?`,
  options: [
    { letter: 'A', text: 'Write a script to continuously monitor S3 bucket for schema changes, and notify the team on changes.' },
    { letter: 'B', text: 'Maintain the schema definition as a JSON document, and refer to it before querying the data.' },
    { letter: 'C', text: 'Glue Data Catalog (with crawlers) can be used for schema definition and changes to it.' },
    { letter: 'D', text: 'Write a Glue job for continuous data transfer and schema change detection.' },
  ],
  answer: 'C',
  explanation: `AWS Glue Data Catalog with crawlers automatically discovers and tracks schema changes in S3 data, updating the metadata accordingly. Athena integrates directly with the Glue Data Catalog, ensuring queries always reflect the current dataset structure without manual intervention.`,
}

export default question45