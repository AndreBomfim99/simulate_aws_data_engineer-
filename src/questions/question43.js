const question43 = {
  id: 'q43',
  scenario: `An e-commerce company has historical sales data stored in Parquet format on Amazon S3 and customer data in Amazon Redshift. The data engineering team needs to efficiently join & query both datasets together without loading the S3 data into Redshift.
  What AWS service or feature can they use to achieve this easily?`,
  options: [
    { letter: 'A', text: 'Redshift Spectrum Query' },
    { letter: 'B', text: 'Export Redshift data to S3, and then query all of it using Athena.' },
    { letter: 'C', text: 'Use AWS Data Catalog to define metadata for Redshift data.' },
    { letter: 'D', text: 'Use AWS Glue to fetch and process data from S3 and Redshift.' },
  ],
  answer: 'A',
  explanation: `Amazon Redshift Spectrum allows you to query data stored in Amazon S3 directly, using Redshift's SQL engine, without loading the data into Redshift tables. This makes it easy to join external S3 data (like Parquet files) with existing Redshift tables, enabling seamless analysis across both sources.`,
}

export default question43