const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const readerController = require("../controllers/readerController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

router.get("/usersList", ensureAuthenticated, adminController.usersList);
router.get("/adminEdit/:id", ensureAuthenticated, adminController.editU);
router.patch("/usersList/:id", ensureAuthenticated, adminController.updateUser);
router.delete(
  "/usersList/:id",
  ensureAuthenticated,
  adminController.userDelete
);
router.get("/reader", ensureAuthenticated, readerController.readerIndex);

module.exports = router;
