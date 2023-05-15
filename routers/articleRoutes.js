const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const commentController = require("../controllers/commentController");

//Retorna los articulos en formato JSON.
router.get("/api/articulos", articleController.apiArticle);

//Muestra todos los articulos, o individualmente de acuerdo a su id.
router.get("/:id", articleController.findOneArticle);
router.post("/:id", articleController.storeEdit);

router.post("/review/:id", commentController.review);

//Funcionalidad del botón "eliminar". (No requiere una vista)
router.get("/delete/:id", articleController.destroyArticle);

module.exports = router;
