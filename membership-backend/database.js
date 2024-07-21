// const sqlite3 = require('sqlite3').verbose();
// // const db = new sqlite3.Database(':memory:');
// const db = new sqlite3.Database("./mg.bd");

// db.serialize(() => {
//   db.run(` CREATE TABLE users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     firstName TEXT,
//     lastname TEXT,
//     id_number INTEGER,
//     date_of_birth DATE,
//     password TEXT
//   )`);

//   db.run(`CREATE TABLE members (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT,
//     email TEXT
//   )`);
// });

// module.exports = db;

const sqlite3 = require("sqlite3").verbose();

// Create or open the database file
const db = new sqlite3.Database("./mg.db", (err) => {
  if (err) {
    return console.error("Error opening database:", err.message);
  }
  console.log("Connected to the SQLite database"); 
});

db.serialize(() => {
  // Create the members table
  db.run(
    `CREATE TABLE IF NOT EXISTS members (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT,
    lastname TEXT, 
    id_number INTEGER UNIQUE,
    date_of_birth DATE
  )`,
    (err) => {
      if (err) {
        return console.error("Error creating members table:", err.message);
      }
      console.log("Members table created successfully");
    }
  );

  // Create the users table
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT UNIQUE,
    password TEXT

  )`,
    (err) => {
      if (err) {
        return console.error("Error creating users table:", err.message);
      }
      console.log("Users table created successfully");
    }
  );
});

// Export the database connection
module.exports = db;
