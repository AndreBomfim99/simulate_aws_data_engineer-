const question48 = {
  id: 'q48',
  scenario: `A retail company has a large volume of transactional data stored in Amazon S3. To analyze this data using complex queries, they plan to employ Amazon EMR with Apache Hive for batch processing. Given the need to effectively manage and query the complex data structure, which metadata management tool should be integrated into their Amazon EMR environment to ensure seamless interaction with Hive?`,
  options: [
    { letter: 'A', text: 'Use Glue Data Catalog with EMR cluster.' },
    { letter: 'B', text: 'Use Amazon RDS as external Hive metastore for EMR cluster.' },
    { letter: 'C', text: 'Use EMR file system for Hive metadata.' },
    { letter: 'D', text: 'Maintain metadata in a configuration file on S3.' },
  ],
  answer: 'A',
  explanation: `AWS Glue Data Catalog is a fully managed, Apache Hive-compatible metadata repository that integrates natively with Amazon EMR. Using it eliminates the need to manage a separate Hive metastore (like RDS), reduces operational overhead, and provides a unified catalog that can also be used with Athena, Redshift Spectrum, and other services.`,
}

export default question48