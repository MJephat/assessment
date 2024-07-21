const db = require("../database");

// Function to create a new member
const createMember = (
  firstname,
  lastname,
  date_of_birth,
  id_number,
  callback = () => {}
) => {
  const query =
    "INSERT INTO members (firstname, lastname, date_of_birth, id_number) VALUES (?, ?, ?, ?)";
  db.run(
    query,
    [firstname, lastname, date_of_birth, id_number],
    function (err) {
      if (err) {
        return callback(err);
      }
      // 'this.lastID' contains the ID of the last inserted row
      callback(null, { id: this.lastID });
    }
  );
};

// Function to get all members
const getAllMembers = (callback = () => {}) => {
  const query = "SELECT * FROM members";
  db.all(query, [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

module.exports = {
  createMember,
  getAllMembers,
};
