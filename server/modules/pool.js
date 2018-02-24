// Generic pool.js file. Replace lines of code as needed. Below is simply
// a generic template that allows a PEAN server to run.

const pg = require('pg');
const Pool = pg.Pool;
const config = {
  database: 'database_name', // the name of the database
  host: 'localhost', // where is your database
  port: 5432, // the port number for your database, 5432 is the default
  max: 10, // how many connections at one time
  idleTimeoutMillis: 30000 // 30 seconds to try to connect
};
const pool = new Pool(config);

pool.on('connect', (client) => {
  console.log('Postgesql connected');
})

pool.on('error', (err, client) => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;