const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const bookCtrl = require("../controllers/book");

const optimizationImage = require('../middleware/image-optimization')

router.get("/", bookCtrl.getAllBook);
router.get("/bestrating", bookCtrl.bestrating);
router.post("/", auth, multer, optimizationImage, bookCtrl.createBook);
router.post("/:id/rating", auth, bookCtrl.averageRating);
router.get("/:id", bookCtrl.getOneBook);
router.put("/:id", auth, multer, optimizationImage, bookCtrl.modifyBook);
router.delete("/:id", auth, bookCtrl.deleteBook);

module.exports = router;