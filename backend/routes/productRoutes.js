const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// adjust this to match your starter auth middleware filename
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getProducts);
router.get("/:id", protect, getSingleProduct);
router.post("/", protect, createProduct);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct);

module.exports = router;