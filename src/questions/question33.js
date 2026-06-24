const question33 = {
  id: 'q33',
  scenario: `A data warehousing team is experiencing performance issues with their Amazon Redshift cluster, despite having four equally sized nodes. One node is consistently overload while the others are underutilized. How can they distribute the workload more evenly across all nodes?`,
  options: [
    { letter: 'A', text: 'Optimize query distribution and performance by modifying the Redshift Workload Management (WLM) settings to balance resource utilization across all nodes.' },
    { letter: 'B', text: 'Implement Amazon Redshift\'s Elastic Resize feature to dynamically adjust cluster size based on workload fluctuations.' },
    { letter: 'C', text: 'Use KEY distribution on a high-cardinality join column.' },
    { letter: 'D', text: 'Use compound sort key for JOIN columns.' },
  ],
  answer: 'C',
  explanation: `Uneven node utilization in Redshift typically indicates a poor distribution key. KEY distribution distributes rows based on the values of a specified column. Choosing a high-cardinality column (many distinct values) that is frequently used in joins ensures data is spread evenly across all nodes, balancing the workload and enabling co-located joins. WLM (A) manages query concurrency, not data distribution. Elastic Resize (B) changes cluster size but doesn't fix data skew. Sort keys (D) affect query order and filtering, not data distribution across nodes.`,
}

export default question33