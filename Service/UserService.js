const User = require("../Model/User");

async function getAllUsers(err, req, res) {
  const data = await User.find({});
  throw new Error("No data");
}

module.exports = getAllUsers;
