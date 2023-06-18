const users = require("../Service/UserService");
const userController = {
  getUsers: async function (req, res, next) {
    try {
      let data = await users();
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userController;
