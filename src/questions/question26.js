const question26 = {
  id: 'q26',
  scenario: `A company is planning to use a provisioned Amazon EMR cluster that runs Apache Spark jobs to perform big data analysis. The company requires high reliability. A big data team must follow best practices for running cost-optimized and long-running workloads on Amazon EMR. The team must find a solution that will maintain the company's current level of performance.
  Which combination of resources will meet these requirements MOST cost-effectively? (Choose two.)`,
  options: [
    { letter: 'A', text: 'Use Hadoop Distributed File System (HDFS) as a persistent data store.' },
    { letter: 'B', text: 'Use Amazon S3 as a persistent data store.' },
    { letter: 'C', text: 'Use x86-based instances for core nodes and task nodes.' },
    { letter: 'D', text: 'Use Graviton instances for core nodes and task nodes.' },
    { letter: 'E', text: 'Use Spot Instances for all primary nodes.' },
  ],
  answer: ['B', 'D'],
  explanation: `Cost effective + high reliability > S3
  Gravitation > Low cost`,
}

export default question26