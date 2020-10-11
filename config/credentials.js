const db = {
  heroku: {
    host: 'ec2-54-75-199-252.eu-west-1.compute.amazonaws.com',
    dbName: 'd1hbjvq318cott',
    user: 'lgsyugdtykgobs',
    port: 5432,
    password: 'c27b8e35a33d8236605ec56bc1bb8df6e42e0f82d5345a7093992a5ad38cda31',
    uri: 'postgres://lgsyugdtykgobs:c27b8e35a33d8236605ec56bc1bb8df6e42e0f82d5345a7093992a5ad38cda31@ec2-54-75-199-252.eu-west-1.compute.amazonaws.com:5432/d1hbjvq318cott',
    herokuCli: 'heroku pg:psql postgresql-sinuous-58561 --app tracker-fcc',
  },
  local: {
    dbName: 'tracker',
    user: 'sa',
    password: '',
    host: 'localhost',
  }
}

export default db;
