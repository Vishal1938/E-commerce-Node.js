const express = require("express");
const router = express.Router();
const productController = require("../../../controllers/api/v1/productsController");

// Request handlers with clearer route descriptions
router.post("/create", productController.create, (req, res) => {
  console.log("Product created successfully"); // Optional logging
});
router.get("/", productController.getProducts, (req, res) => {
  console.log("Products retrieved successfully"); // Optional logging
});
router.delete("/:productId", productController.deleteProduct, (req, res) => {
  console.log("Product deleted successfully"); // Optional logging
});
router.put("/:productId/update_quantity", productController.updateQuantity, (req, res) => {
  console.log("Product quantity updated successfully"); // Optional logging
});

module.exports = router;
