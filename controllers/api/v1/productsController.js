const Product = require("../../../models/product");
const mongoose = require("mongoose");

// Error handling helper function
const handleError = (err, res) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
};

// Create a product
module.exports.create = async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json({
      message: "Product created successfully",
      success: true,
      data: { product: savedProduct },
    });
  } catch (err) {
    handleError(err, res);
  }
};

// Get all products
module.exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find().select("_id name quantity");
    res.status(200).json({ success: true, data: { products } });
  } catch (err) {
    handleError(err, res);
  }
};

// Delete a product
module.exports.deleteProduct = async (req, res, next) => {
  const id = req.params.productId;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (err) {
    handleError(err, res);
  }
};

// Update product quantity
module.exports.updateQuantity = async (req, res, next) => {
  const id = req.params.productId;
  const quantityUpdate = parseInt(req.query.number);

  // Validate ID format and quantity update value (optional improvement)
  if (!id.match(/^[0-9a-fA-F]{24}$/) || isNaN(quantityUpdate)) {
    return res.status(400).json({ message: "Invalid product ID or quantity update" });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.quantity + quantityUpdate >= 0) {
      product.quantity += quantityUpdate;
      await product.save();
      res.status(200).json({
        message: "Product quantity updated successfully",
        data: { updated_quantity: product.quantity },
      });
    } else {
      res.status(400).json({ message: "Quantity cannot be negative" });
    }
  } catch (err) {
    handleError(err, res);
  }
};
