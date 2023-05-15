const express = require("express");
const routes = express.Router();
const userController = require("../controllers/userController");
const adminController = require("../controllers/adminController");

routes.get("/usersList", userController.usersList);
routes.get("/adminEdit/:id", adminController.editU);
routes.post("/userList");

module.exports = routes;
