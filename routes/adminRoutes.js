const express = require("express");
const adminController = require("../controllers/adminController");
const articleController = require("../controllers/articleController");
const routes = express.Router();

//Vista de la pagina administrador, donde se da la opción de crear, modificar y eliminar un articulo.
routes.get("/", adminController.admin);

//Rutas y vistas de opciones "editar" articulo.
routes.post("/crear", articleController.storeArticle);
routes.get("/crear", articleController.formUploadArticle);
routes.get("/editar/:id", articleController.formUpdateArticle);

module.exports = routes;
