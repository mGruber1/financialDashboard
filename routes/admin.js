const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/getCategories", adminController.getCategories);
router.post(
  "/syncFixedCostsCategories",
  adminController.syncFixedCostsCategories
);
router.post("/insertNewCategory", adminController.insertNewCategory);
router.post("/updateFixedCosts", adminController.updateFixedCosts);

module.exports = router;
