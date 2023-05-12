const express = require("express");
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const logoutController = require("../controllers/logoutController");
const articleController = require("../controllers/articleController");
const routes = express.Router();

routes.get("/home", articleController.index);

//Rutas del Registro
routes.get("/register", registerController.viewRegister);
routes.post("/register", registerController.createdAuthor);

//Rutas del Login/logout
routes.get("/login", loginController.viewLogin);
routes.post("/login", loginController.login);
routes.get("/logout", logoutController.logoutUser);

module.exports = routes;
