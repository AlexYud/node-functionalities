var knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'natekate12E15',
    database: 'knex.js'
  }
});

module.exports = knex;