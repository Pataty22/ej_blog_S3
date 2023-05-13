require("dotenv").config();

async function runAllSeeders() {
  await require("./roleSeeder")();
  await require("./userSeeder")();
  await require("./articleSeeder")();
}

runAllSeeders();
