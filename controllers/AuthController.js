const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const data = {
    name,
    email,
    password: hashedPassword,
  };
  const user = await prisma.user.create({ data });
  return res.status(201).send({
    success: true,
    data: {
      user,
    },
  });
};
