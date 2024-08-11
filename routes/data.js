const express = require("express");
const dataController = require("../controllers/data");
const adminController = require("../controllers/admin");
const router = express.Router();

router.get("/ConnectionTest", (req, res) => {
  res.json({ status: 0 });
});
router.get("/getMonthlyExpenditures", dataController.getMonthlyExpenditures);
router.get(
  "/getLastMonthExpenditures",
  dataController.getLastMonthExpenditures
);
router.get("/getMonthlyRevenues", dataController.getMonthlyRevenues);
router.get("/getIncomeRate", dataController.getIncomeRate);
router.get("/getFixedCosts", dataController.getFixedCosts);
router.post(
  "/insertMonthlyExpenditures",
  dataController.insertMonthlyExpenditures
);
router.post("/insertMonthlyRevenues", dataController.insertMonthlyRevenues);
router.post("/getAverageCosts", dataController.getAverageCosts);
router.post("/getMonthlyCosts", dataController.getMonthlyCosts);

module.exports = router;
