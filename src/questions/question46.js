const question46 = {
  id: 'q46',
  scenario: `A company stores data in an Amazon Redshift table with an interleaved sort key. Due to frequent data modifications (updates/deletes), the table's performance is declining. 
  How can a data engineer quickly optimize the table for better storage efficiency and query performance while preserving the efficacy of the sort key?`,
  options: [
    { letter: 'A', text: 'Create a new table with a different sort key and migrate the data.' },
    { letter: 'B', text: 'Increase the number of sort keys in the table.' },
    { letter: 'C', text: 'Use Amazon Redshift\'s compression features to reduce storage size.' },
    { letter: 'D', text: 'Vacuum the table regularly to reclaim unused space and update statistics.' },
  ],
  answer: 'D',
  explanation: `Vacuum the table regularly to reclaim unused space and update statistics.`,
}

export default question46