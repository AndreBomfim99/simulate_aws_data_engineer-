const question30 = {
  id: 'q30',
  scenario: `A company is migrating a legacy application to an Amazon S3 based data lake. A data engineer reviewed data that is associated with the legacy application. The data engineer found that the legacy data contained some duplicate information.
  The data engineer must identify and remove duplicate information from the legacy application data.
  Which solution will meet these requirements with the LEAST operational overhead?`,
  options: [
    { letter: 'A', text: 'Write a custom extract, transform, and load (ETL) job in Python. Use the DataFrame.drop_duplicates() function by importing the Pandas library to perform data deduplication.' },
    { letter: 'B', text: 'Write an AWS Glue extract, transform, and load (ETL) job. Use the FindMatches machine learning (ML) transform to transform the data to perform data deduplication.' },
    { letter: 'C', text: 'Write a custom extract, transform, and load (ETL) job in Python. Import the Python dedupe library. Use the dedupe library to perform data deduplication.' },
    { letter: 'D', text: 'Write an AWS Glue extract, transform, and load (ETL) job. Import the Python dedupe library. Use the dedupe library to perform data deduplication.' },
  ],
  answer: 'B',
  explanation: `Option B, writing an AWS Glue ETL job with the FindMatches ML transform, is likely to meet the requirements with the least operational overhead. This solution leverages a managed service (AWS Glue) and incorporates a built-in ML transform specifically designed for deduplication, thus minimizing the need for manual setup, maintenance, and machine learning expertise.`,
}

export default question30