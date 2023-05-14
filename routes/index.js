const articleRoutes = require("./articleRoutes");
const adminRoutes = require("./adminRoutes");
const sessionRoutes = require("./sessionRoutes");
const roleRoutes = require("./roleRoutes");

module.exports = (app) => {
  app.use("/article", articleRoutes);
  app.use("/", sessionRoutes);
  app.use("/admin", adminRoutes);
  app.use("/", roleRoutes);
};
