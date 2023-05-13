const { faker } = require("@faker-js/faker");
const { User } = require("../models");

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 20; i++) {
    users.push({
      fullName: faker.person.firstName() + " " + faker.person.lastName(),
      email: faker.internet.email(),
      rolId: faker.number.int({ min: 1, max: 4 }),
      password: "$2a$08$VdKXSM32Q0VxyygLbVLYHe.Axl1W09FbsnI7vR50/pdefg9/zknm.",
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de User.");
};
