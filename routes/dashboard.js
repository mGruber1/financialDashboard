const express = require("express");

const router = express.Router();

const dashboardController = require("../controllers/dashboard");

router.get("/getYears", dashboardController.getYears);

module.exports = router;
