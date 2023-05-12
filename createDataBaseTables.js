require("dotenv").config();
const { sequelize } = require("./models");

async function createDatabaseTables() {
  await sequelize.sync({ force: true });
  console.log("[Database] ¡Las tablas fueron creadas!");
}

createDatabaseTables();
