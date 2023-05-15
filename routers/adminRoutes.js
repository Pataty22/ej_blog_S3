const express = require("express");
const adminController = require("../controllers/adminController");
const articleController = require("../controllers/articleController");
const router = express.Router();

//Vista de la pagina administrador, donde se da la opción de crear, modificar y eliminar un articulo.
router.get("/", adminController.admin);

//Rutas y vistas de opciones "editar" articulo.
router.post("/crear", articleController.storeArticle);
router.get("/crear", articleController.formUploadArticle);
router.get("/editar/:id", articleController.formUpdateArticle);

module.exports = router;
