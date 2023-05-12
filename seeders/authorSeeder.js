const { faker } = require("@faker-js/faker");
const { Author } = require("../models");

module.exports = async () => {
  const authors = [];

  for (let i = 0; i < 20; i++) {
    authors.push({
      fullName: faker.person.firstName() + " " + faker.person.lastName(),
      email: faker.internet.email(),
      role: faker.datatype.boolean(),
      password: "$2a$08$VdKXSM32Q0VxyygLbVLYHe.Axl1W09FbsnI7vR50/pdefg9/zknm.",
    });
  }

  await Author.bulkCreate(authors);
  console.log("[Database] Se corrió el seeder de Author.");
};
