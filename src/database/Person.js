const { Pool } = require("pg");

const PersonsPool = new Pool({
  connectionString: process.env.DBCONN,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  query: (text, params) => PersonsPool.query(text, params),
};
