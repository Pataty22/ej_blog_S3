const express = require("express");
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const logoutController = require("../controllers/logoutController");
const articleController = require("../controllers/articleController");
const router = express.Router();

router.get("/home", articleController.index);

//Rutas del Registro
router.get("/register", registerController.viewRegister);
router.post("/register", registerController.createdUser);

//Rutas del Login/logout
router.get("/login", loginController.viewLogin);
router.post("/login", loginController.login);
router.get("/logout", logoutController.logoutUser);

module.exports = router;
