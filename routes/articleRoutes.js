const express = require("express");
const routes = express.Router();
const articleController = require("../controllers/articleController");
const commentController = require("../controllers/commentController");

//Retorna los articulos en formato JSON.
routes.get("/api/articulos", articleController.apiArticle);

//Muestra todos los articulos, o individualmente de acuerdo a su id.
routes.get("/:id", articleController.findOneArticle);
routes.post("/:id", articleController.storeEdit);

//Guardar y postear comentario
routes.post("/review/:id", commentController.review);

//Funcionalidad del botón "eliminar". (No requiere una vista)
routes.get("/delete/:id", articleController.destroyArticle);

module.exports = routes;
