const express = require("express");

const router = express.Router();

const dashboardController = require("../controllers/dashboard");

router.get("/getYears", dashboardController.getYears);
router.get("/getAllExpenditures", dashboardController.getAllExpenditures);
router.get("/getAllRevenues", dashboardController.getAllRevenues);

module.exports = router;
