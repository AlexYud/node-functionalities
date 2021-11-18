var knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'natekate12E15',
    database: 'apiusers'
  }
});

module.exports = knex