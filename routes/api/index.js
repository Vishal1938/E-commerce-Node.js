const express = require("express");
const router = express.Router();



// Request Hanler
router.use("/v1", require("./v1"));



module.exports = router;