const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UserService {
  async createUser(data) {
    return await prisma.user.create({ data });
  }

  async getAllUsers() {
    return await prisma.user.findMany();
  }
}

module.exports = new UserService();
