const express = require("express");
const routes = express.Router();
const adminController = require("../controllers/adminController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

routes.get("/usersList", ensureAuthenticated, adminController.usersList);
routes.get("/adminEdit/:id", ensureAuthenticated, adminController.editU);
routes.patch("/usersList/:id", ensureAuthenticated, adminController.updateUser);
routes.delete(
  "/usersList/:id",
  ensureAuthenticated,
  adminController.userDelete
);

module.exports = routes;
