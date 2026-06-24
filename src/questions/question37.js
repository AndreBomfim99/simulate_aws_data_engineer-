const question37 = {
  id: 'q37',
  scenario: `A company stores large datasets in CSV format on Amazon S3. They need a solution to directly analyze these CSV files using SQL queries - without first moving or converting the data.
  Which AWS service can fulfill this requirement?`,
  options: [
    { letter: 'A', text: 'Data pipeline to copy data from S3 to RDS for querying' },
    { letter: 'B', text: 'Redshift Spectrum to execute SQL queries against CSV data in S3' },
    { letter: 'C', text: 'DMS to load data into RDBMS for querying' },
    { letter: 'D', text: 'Athena to run SQL queries against CSV data in S3' },
  ],
  answer: 'D',
  explanation: `Amazon Athena is a serverless query service that allows you to run SQL queries directly against data stored in Amazon S3, including CSV files, without the need to move or convert the data. Athena is purpose-built for this use case and requires no infrastructure setup.`,
}

export default question37