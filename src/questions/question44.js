const question44 = {
  id: 'q44',
  scenario: `A service company wants to efficiently consolidate customer interaction data from multiple SaaS platforms into Amazon S3 for subsequent analysis in Amazon Redshift. Which AWS service can automate this data transfer process with minimal operational overhead?`,
  options: [
    { letter: 'A', text: 'Use a Glue job to funnel data from SaaS platform to S3.' },
    { letter: 'B', text: 'Leverage Amazon AppFlow to automate this data-transfer.' },
    { letter: 'C', text: 'Setup AWS Data Exchange to enable this data-transfer.' },
    { letter: 'D', text: 'Complete data transfer using Snow family of devices.' },
  ],
  answer: 'B',
  explanation: `Amazon AppFlow is a fully managed integration service that securely transfers data between SaaS applications and AWS services like S3, Redshift, and others, with minimal operational overhead.`,
}

export default question44