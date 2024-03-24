const express = require("express");
const controllers = require("./controllers");

const router = express.Router();

router.get("/ConnectionTest", (req, res) => {
    res.json({ status: 0 });
});
router.get("/getMonthlyExpenditures", controllers.getMonthlyExpenditures);
router.get("/getMonthlyRevenues", controllers.getMonthlyRevenues);
router.get("/getIncomeRate", controllers.getIncomeRate);
router.get("/getFixedCosts", controllers.getFixedCosts);
router.get("/getSumFixedCosts", controllers.getSumFixedCosts);
router.get("/getAverageCarGasCosts", controllers.getAverageCarGasCosts);
router.get("/getMonthlyCarGasCosts", controllers.getMonthlyCarGasCosts);
router.get("/getAverageInvestmentCosts", controllers.getAverageInvestmentCosts);
router.get("/getMonthlyInvestmentPlanCosts", controllers.getMonthlyInvestmentPlanCosts);
router.get("/getAverageGroceryCosts", controllers.getAverageGroceryCosts);
router.get("/getMonthlyGroceryCosts", controllers.getMonthlyGroceryCosts);
router.get("/getAverageShoppingCosts", controllers.getAverageShoppingCosts);
router.get("/getMonthlyShoppingCosts", controllers.getMonthlyShoppingCosts);
router.get("/getAverageLeisureCosts", controllers.getAverageLeisureCosts);
router.get("/getMonthlyLeisureCosts", controllers.getMonthlyLeisureCosts);
router.post("/insertMonthlyExpenditures", controllers.insertMonthlyExpenditures);
router.post("/insertMonthlyRevenues", controllers.insertMonthlyRevenues);

module.exports = router;