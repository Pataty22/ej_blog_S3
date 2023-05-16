const express = require("express");
const adminController = require("../controllers/adminController");
const articleController = require("../controllers/articleController");
const midEditor = require("../middlewares/midEditor");
const router = express.Router();

router.use(midEditor);

//Vista de la pagina administrador, donde se da la opción de crear, modificar y eliminar un articulo.
router.get("/", adminController.admin);

//Rutas y vistas de opciones "editar" articulo.
router.post("/crear", articleController.storeArticle);
router.get("/crear", articleController.formUploadArticle);
router.get("/adminRegister", adminController.newRegister);
router.post("/adminRegister", adminController.adminCreatedUser);
router.get("/editar/:id", articleController.formUpdateArticle);

module.exports = router;
