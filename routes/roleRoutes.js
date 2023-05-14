const express = require("express");
const routes = express.Router();
const adminController = require("../controllers/adminController");

routes.get("/usersList", adminController.usersList);
