// Questão 40
console.log('Esta é a questão 40');const question40 = {
  id: 'q40',
  scenario: `How can a company implement fine-grained access control on data stored in an AWS data lake, allowing specific users to view only designated parts of datasets (rows, columns) while using Athena, Redshift Spectrum, and Hive for querying?`,
  options: [
    { letter: 'A', text: 'Use AWS Lake Formation to setup fine grained data access policies.' },
    { letter: 'B', text: 'Use Security Groups for data access control.' },
    { letter: 'C', text: 'Use Amazon Security Hub to define fine grained access control.' },
    { letter: 'D', text: 'Use S3 bucket policies for row/column level security.' },
  ],
  answer: 'A',
  explanation: `AWS Lake Formation provides centralized governance and security for data lakes, allowing you to define fine-grained access policies at the row and column level. These policies are enforced across query engines like Amazon Athena, Redshift Spectrum, and Apache Hive, ensuring that users only see the data they are authorized to access, without modifying the underlying data or requiring complex application-level logic.`,
}

export default question40