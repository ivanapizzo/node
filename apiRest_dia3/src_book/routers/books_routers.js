const {Router} = require("express");
const router = Router();
const booksCtrl = require("../controller/books_controller")

router.get("/", booksCtrl.getStart);
router.get("/b2", booksCtrl.getBooks);
router.post("/books", booksCtrl.postBooks);
router.put("/books", booksCtrl.putBooks);
router.delete("/books", booksCtrl.deleteBooks);


module.exports = router; 