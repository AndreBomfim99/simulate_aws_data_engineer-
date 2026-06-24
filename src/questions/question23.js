const question23 = {
  id: 'q23',
  scenario: `A company currently stores all of its data in Amazon S3 by using the S3 Standard storage class.
  A data engineer examined data access patterns to identify trends. During the first 6 months, most data files are accessed several times each day. Between 6 months and 2 years, most data files are accessed once or twice each month. After 2 years, data files are accessed only once or twice each year.
  The data engineer needs to use an S3 Lifecycle policy to develop new data storage rules. The new storage solution must continue to provide high availability.
  Which solution will meet these requirements in the MOST cost-effective way?`,
  options: [
    { letter: 'A', text: 'Transition objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 6 months. Transfer objects to S3 Glacier Flexible Retrieval after 2 years.' },
    { letter: 'B', text: 'Transition objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 6 months. Transfer objects to S3 Glacier Flexible Retrieval after 2 years.' },
    { letter: 'C', text: 'Transition objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 6 months. Transfer objects to S3 Glacier Deep Archive after 2 years.' },
    { letter: 'D', text: 'Transition objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 6 months. Transfer objects to S3 Glacier Deep Archive after 2 years.' },
  ],
  answer: 'C',
  explanation: `Why Not the Other Options?
  A. S3 One Zone-IA → Glacier Flexible Retrieval ❌ One Zone-IA is risky (data loss if the AZ fails). Glacier Flexible Retrieval is more expensive than Deep Archive.
  B. S3 Standard-IA → Glacier Flexible Retrieval ❌ Glacier Flexible Retrieval is not the cheapest long-term storage. Deep Archive costs much less.
  D. S3 One Zone-IA → Glacier Deep Archive ❌ One Zone-IA lacks high availability (single AZ failure = data loss). S3 Standard-IA is safer.`,
}

export default question23