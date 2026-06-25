const question53 = {
  id: 'q53',
  scenario: `How can you efficiently extract a specific column from a large Parquet file stored in S3 without downloading the entire file, while minimizing data transfer costs?`,
  options: [
    { letter: 'A', text: 'Run a SQL query to extract column data using Amazon Athena.' },
    { letter: 'B', text: 'Load the file into a (Apache) Hadoop cluster and extract column data.' },
    { letter: 'C', text: 'Use S3 SELECT to extract specific column data.' },
    { letter: 'D', text: 'Use Amazon Redshift Spectrum to query column data.' },
  ],
  answer: 'C',
  explanation: `Athena vs S3 Select

                Athena: is better suited for complex queries and large-scale data analysis, with higher costs but extensive functionality

                S3 Select: is cost-effective for extracting specific columns or rows from individual S3 objects, with simpler query capabilities`,
}

export default question53