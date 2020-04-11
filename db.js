/** Database for lunchly */

const pg = require("pg");

const DB_URI = (process.env.NODE_ENV === "test")
  ? "postgresql:///lunchly_test"
  : "postgresql:///lunchly";

const db = new pg.Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;
