const articleRoutes = require("./articleRoutes");
const adminRoutes = require("./adminRoutes");
const sessionRoutes = require("./sessionRoutes");

module.exports = (app) => {
  app.use("/article", articleRoutes);
  app.use("/", sessionRoutes);
  app.use("/admin", adminRoutes);
};
