const question11 = {
  id: 'q11',
  scenario: `A data engineer needs Amazon Athena queries to finish faster. The data engineer notices that all the files the Athena queries use are currently stored in uncompressed .csv format. The data engineer also notices that users perform most queries by selecting a specific column.
  Which solution will MOST speed up the Athena query performance?`,
  options: [
    { letter: 'A', text: 'Change the data format from .csv to JSON format. Apply Snappy compression.' },
    { letter: 'B', text: 'Compress the .csv files by using Snappy compression.' },
    { letter: 'C', text: 'Change the data format from .csv to Apache Parquet. Apply Snappy compression.' },
    { letter: 'D', text: 'Compress the .csv files by using gzip compression.' },
  ],
  answer: 'C',
  explanation: `Apache Parquet is a columnar storage format optimized for analytical queries. It is highly efficient for query performance, especially when queries involve selecting specific columns, as it allows for column pruning and predicate pushdown optimizations.`,
}

export default question11
