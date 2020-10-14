const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books/WishList"
router.route("/WishList")
  .get(booksController.findAll);

// Matches with "/api/books/add-book"
router.route("/add-book")
  .post(booksController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;