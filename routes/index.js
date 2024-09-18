const express = require("express");
const indexController = require("../controllers");

const router = express.Router();

router.get("/ConnectionTest", (req, res) => {
  res.json({ status: 0 });
});
router.get("/getMonthlyExpenditures", indexController.getMonthlyExpenditures);
router.get(
  "/getLastMonthExpenditures",
  indexController.getLastMonthExpenditures
);
router.get("/getMonthlyRevenues", indexController.getMonthlyRevenues);
router.get("/getIncomeRate", indexController.getIncomeRate);
router.get("/getAllFixedCosts", indexController.getAllFixedCosts);
router.get("/getSumFixedCosts", indexController.getSumFixedCosts);
router.get(
  "/getIncomeFixedCostsRatio",
  indexController.getIncomeFixedCostsRatio
);
router.get("/getSurplusFunds", indexController.getSurplusFunds);
router.post(
  "/insertMonthlyExpenditures",
  indexController.insertMonthlyExpenditures
);
router.post("/insertMonthlyRevenues", indexController.insertMonthlyRevenues);
router.post("/getAverageCosts", indexController.getAverageCosts);
router.post("/getMonthlyCosts", indexController.getMonthlyCosts);

module.exports = router;
