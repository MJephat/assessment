const memberModel = require("../models/memberModel");

const getAllMembers = (req, res) => {
  memberModel.getAllMembers((err, members) => {
    if (err) return res.status(500).json({ message: "Error fetching members" });
    res.json(members);
  });
};

const createMember = (req, res) => {
  const { firstname, lastname,date_of_birth, id_number} = req.body;

  memberModel.createMember(firstname,lastname,date_of_birth,id_number, (err, member) => {
      if (err)
        return res.status(500).json({ message: "Error creating member" });
      res.status(201).json(member);
    }
  );
};

module.exports = { getAllMembers, createMember };
