const question24 = {
  id: 'q24',
  scenario: `A company maintains an Amazon Redshift provisioned cluster that the company uses for extract, transform, and load (ETL) operations to support critical analysis tasks. A sales team within the company maintains a Redshift cluster that the sales team uses for business intelligence (BI) tasks.
  The sales team recently requested access to the data that is in the ETL Redshift cluster so the team can perform weekly summary analysis tasks. The sales team needs to join data from the ETL cluster with data that is in the sales team's BI cluster.
  The company needs a solution that will share the ETL cluster data with the sales team without interrupting the critical analysis tasks. The solution must minimize usage of the computing resources of the ETL cluster.
  Which solution will meet these requirements?`,
  options: [
    { letter: 'A', text: 'Set up the sales team BI cluster as a consumer of the ETL cluster by using Redshift data sharing.' },
    { letter: 'B', text: 'Create materialized views based on the sales team\'s requirements. Grant the sales team direct access to the ETL cluster.' },
    { letter: 'C', text: 'Create database views based on the sales team\'s requirements. Grant the sales team direct access to the ETL cluster.' },
    { letter: 'D', text: 'Unload a copy of the data from the ETL cluster to an Amazon S3 bucket every week. Create an Amazon Redshift Spectrum table based on the content of the ETL cluster.' },
  ],
  answer: 'A',
  explanation: `A`,
}

export default question24