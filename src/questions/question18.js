const question18 = {
  id: 'q18',
  scenario: `A company uses an Amazon Redshift cluster that runs on RA3 nodes. The company wants to scale read and write capacity to meet demand. A data engineer needs to identify a solution that will turn on concurrency scaling.
  Which solution will meet this requirement?`,
  options: [
    { letter: 'A', text: 'Turn on concurrency scaling in workload management (WLM) for Redshift Serverless workgroups.' },
    { letter: 'B', text: 'Turn on concurrency scaling at the workload management (WLM) queue level in the Redshift cluster.' },
    { letter: 'C', text: 'Turn on concurrency scaling in the settings during the creation of any new Redshift cluster.' },
    { letter: 'D', text: 'Turn on concurrency scaling for the daily usage quota for the Redshift cluster.' },
  ],
  answer: 'B',
  explanation: `Concurrency scaling in Amazon Redshift allows the cluster to automatically add and remove compute resources in response to workload demands. Enabling concurrency scaling at the workload management (WLM) queue level allows you to specify which queues can benefit from concurrency scaling based on the query workload.`,
}

export default question18