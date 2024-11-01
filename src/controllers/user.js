const userService = require("../services/user");

class User {
  static async CreateUser(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const user = await userService.createUser({ name, email, password });
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async GetAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = User;
