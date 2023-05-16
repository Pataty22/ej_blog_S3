const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const commentController = require("../controllers/commentController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const midEditor = require("../middlewares/midEditor");

//Retorna los articulos en formato JSON.
router.get("/api/articulos", articleController.apiArticle);

//Muestra todos los articulos, o individualmente de acuerdo a su id.
router.get("/:id", ensureAuthenticated, articleController.findOneArticle); //todos
router.post("/:id", midEditor, articleController.storeEdit); // admin- edit, falta escritor

router.post("/review/:id", ensureAuthenticated, commentController.review); //logueado, todos

//Funcionalidad del botón "eliminar". (No requiere una vista)
router.get("/delete/:id", midEditor, articleController.destroyArticle); //editor y admin- falta escritor

module.exports = router;
