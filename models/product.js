const mongoose = require("mongoose");

// Product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Remove leading/trailing whitespace
    minlength: 1, // Enforce a minimum length for better data integrity
    maxlength: 255, // Set a reasonable maximum length to prevent bloat
  },
  quantity: {
    type: Number,
    required: true,
    min: 0, // Ensure quantity is non-negative
    default: 0, // Set default to 0 for consistency (adjustable based on needs)
  },

  createdAt: {
    type: Date,
    default: Date.now, // Timestamp for creation time
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Timestamp for updates
  },
});

// Optional: Add timestamps for automatic updates
productSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
