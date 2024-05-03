const express = require("express");
const controllers = require("./controllers");

const router = express.Router();

router.get("/ConnectionTest", (req, res) => {
  res.json({ status: 0 });
});
router.get("/getMonthlyExpenditures", controllers.getMonthlyExpenditures);
router.get("/getLastMonthExpenditures", controllers.getLastMonthExpenditures);
router.get("/getMonthlyRevenues", controllers.getMonthlyRevenues);
router.get("/getIncomeRate", controllers.getIncomeRate);
router.get("/getFixedCosts", controllers.getFixedCosts);
router.post(
  "/insertMonthlyExpenditures",
  controllers.insertMonthlyExpenditures
);
router.post("/insertMonthlyRevenues", controllers.insertMonthlyRevenues);

// ADMIN

router.get("/getCategories", controllers.getCategories);
router.post("/syncFixedCostsCategories", controllers.syncFixedCostsCategories);
router.post("/insertNewCategory", controllers.insertNewCategory);
router.post("/updateFixedCosts", controllers.updateFixedCosts);
router.post("/getAverageCosts", controllers.getAverageCosts);
router.post("/getMonthlyCosts", controllers.getMonthlyCosts);

module.exports = router;
