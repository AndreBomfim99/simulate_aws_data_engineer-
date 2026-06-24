const question42 = {
  id: 'q42',
  scenario: `A company utilizes Amazon EMR and Athena for data processing and querying, respectively. They need a centralized repository to manage table definitions and properties across these platforms and also incorporate metadata from an existing Apache Hive system. What is the most efficient way to achieve this without extensive development?`,
  options: [
    { letter: 'A', text: 'Define and store the metadata as parquet files in S3.' },
    { letter: 'B', text: 'Use AWS Lake Formation as centralized metadata repository.' },
    { letter: 'C', text: 'Use tables in a RDBMS as metadata store.' },
    { letter: 'D', text: 'Use AWS Glue Data Catalog for centralized metadata repository.' },
  ],
  answer: 'D',
  explanation: `D`,
}

export default question42