const express = require("express");
const router = express.Router();



// request handler
router.use("/products", require("./productsRoutes"));



module.exports = router;