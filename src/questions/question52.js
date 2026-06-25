const question52 = {
  id: 'q52',
  scenario: `A company is looking to upgrade its high-performance cloud storage from Amazon EBS io1 to io2 volumes to improve system speed. How can a data engineer seamlessly migrate this storage without interrupting ongoing operations or losing data?`,
  options: [
    { letter: 'A', text: 'Change volume from io1 to io2 via AWS console or CLI without detaching.' },
    { letter: 'B', text: 'Use EBS APIs to copy data from io1 to new provisioned io2 volumes.' },
    { letter: 'C', text: 'Use CLI commands to copy data from io1 to new provisioned io2 volumes.' },
    { letter: 'D', text: 'Replicate data from io1 to new provisioned io2 volumes using DataSync.' },
  ],
  answer: 'A',
  explanation: `Amazon EBS allows you to modify volume type from io1 to io2 without detaching the volume, using the AWS console or CLI. This is an online operation that preserves existing data, requires no downtime, and maintains ongoing operations seamlessly. io2 volumes offer higher durability (99.999%) and better performance per GB compared to io1.`,
}

export default question52