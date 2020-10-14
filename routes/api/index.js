const router = require("express").Router();
const bookRoutes = require("./books");

// API Routes
router.use("/books", bookRoutes);

module.exports = router;