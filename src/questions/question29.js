const question29 = {
  id: 'q29',
  scenario: `A data engineer needs to use AWS Step Functions to design an orchestration workflow. The workflow must parallel process a large collection of data files and apply a specific transformation to each file.
  Which Step Functions state should the data engineer use to meet these requirements?`,
  options: [
    { letter: 'A', text: 'Parallel state' },
    { letter: 'B', text: 'Choice state' },
    { letter: 'C', text: 'Map state' },
    { letter: 'D', text: 'Wait state' },
  ],
  answer: 'C',
  explanation: `The Map state allows you to define a single execution path for processing a collection of data items in parallel.
  This aligns perfectly with the data engineer's requirement of parallel processing a large collection of data files`,
}

export default question29